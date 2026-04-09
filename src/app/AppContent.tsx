import { useContext } from "react"
import { AuthContext } from "./providers/AuthContext"
import { UserPage } from "@/pages/userPage";
import { LoginPage } from "@/pages/LoginPage";

export const AppContent = () => {
    const auth = useContext(AuthContext);

    if (auth?.isAuth) {
        return <UserPage />
    }
    return <LoginPage />
};