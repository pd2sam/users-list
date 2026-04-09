import { createContext, useState, ReactNode } from "react";

interface IAuth {
    isAuth: boolean;
    userName: string | null;
    logIn: (userName: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuth | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

    const logIn = (newUserName: string) => {
        setIsAuth(true);
        setUserName(newUserName);
    }
    const logout = () => {
        setIsAuth(false);
        setUserName(null);
    }

    return (
        <AuthContext.Provider value={{isAuth, logIn, logout, userName}}>
            {children}
        </AuthContext.Provider>
    );
};