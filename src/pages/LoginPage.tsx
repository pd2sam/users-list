import { useState } from "react"
import Input from "antd/es/input/Input";
import { Button } from "antd";


export function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('данные для входа', { login, password });



    };
    return (
        <div>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <Input
                        type="text"
                        placeholder="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="primary">Войти</Button>
                </fieldset>
            </form>
        </div>
    )
}