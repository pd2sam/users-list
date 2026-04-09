import { createContext, useState, ReactNode, Children } from "react";

interface IAuth {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuth | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => setIsAuth(true);
    const logout = () => setIsAuth(false);

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};