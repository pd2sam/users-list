import { useContext } from "react"
import { AuthContext } from "./providers/AuthContext"
import { UserPage } from "@/pages/userPage";
import { LoginPage } from "@/pages/LoginPage";
import { Header } from "@/widgets/header/ui/Header";

export const AppContent = () => {
    const auth = useContext(AuthContext);

    if (auth?.isAuth) {
        return <>
            <Header />
            <UserPage />
        </>
    }
    return <LoginPage />
};