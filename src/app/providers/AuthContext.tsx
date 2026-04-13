import { createContext, useState, ReactNode } from "react";

interface IAuth {
    isAuth: boolean;
    userName: string | null;
    logIn: (userName: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState(() => {
        const savedData = localStorage.getItem('auth_session');
        if (!savedData) return false;

        const { token, expires } = JSON.parse(savedData);
        if (new Date().getTime() > expires) {
            localStorage.removeItem('auth_session');
            return false;
        }
        return !!token;
    });
    const [userName, setUserName] = useState<string | null>(null);

    const logIn = (newUserName: string) => {
        const expires = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        const sessionData = {
            token: 'fake-jwt-token',
            userName: newUserName,
            expires
        };
        localStorage.setItem('auth_session', JSON.stringify(sessionData));
        setIsAuth(true);
        setUserName(newUserName)
    }
    const logout = () => {
        localStorage.removeItem('auth_session');
        setIsAuth(false);
        setUserName(null);
    }

    return (
        <AuthContext.Provider value={{ isAuth, logIn, logout, userName }}>
            {children}
        </AuthContext.Provider>
    );
};