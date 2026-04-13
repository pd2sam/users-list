import { useContext } from "react";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { Button, Switch } from "antd";
import { AuthContext } from "@/app/providers/AuthContext";
import './Header.css';

export function Header() {
    const auth = useContext(AuthContext);
    const { theme, toggleTheme } = useTheme()

    return <>
        <header className="header">
            <div>
                <h1>I don't know these people</h1>
            </div>
            <div className="switcher">
                <Switch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
                {auth?.isAuth && (
                    <>
                        <span>Привет, {auth.userName || 'Гость'}</span>
                        <Button type="primary" danger onClick={() => auth.logout()}>Выйти</Button>
                    </>
                )}
            </div>
        </header>
    </>
}