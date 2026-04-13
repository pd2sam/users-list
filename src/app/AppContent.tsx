import { useContext } from "react"
import { AuthContext } from "./providers/AuthContext"
import { UserPage } from "@/pages/userPage";
import { LoginPage } from "@/pages/LoginPage";
import { Header } from "@/widgets/header/ui/Header";
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from "@/shared/lib/hooks/useTheme";

export const AppContent = () => {
    const auth = useContext(AuthContext);
    const { theme } = useTheme();

    return (
        <ConfigProvider theme={{
            algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}>
            {auth?.isAuth ? (
                <>
                    <Header />
                    <UserPage />
                </>
            ) : (
                <LoginPage />
            )}

        </ConfigProvider>
    );
};