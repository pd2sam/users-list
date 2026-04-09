import { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "@/app/providers/AuthContext";

export function Header() {
    const auth = useContext(AuthContext);

    return <>
        <header className="header">
            <div>
                Grønn og Blå
            </div>
            {auth?.isAuth && (
                <div>
                    <span>Привет, {auth.userName || 'Гость'}</span>
                    <Button type="primary" danger onClick={() => auth.logout()}>Выйти</Button>
                </div>
            )}
        </header>
    </>
}