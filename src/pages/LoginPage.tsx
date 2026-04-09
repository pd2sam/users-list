import { useContext, useState } from "react"
import Input from "antd/es/input/Input";
import { Button, Divider } from "antd";
import { AuthContext } from "@/app/providers/AuthContext";


export function LoginPage() {
    const auth = useContext(AuthContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (login === 'admin' && password === '123') {
            auth?.login();
            alert('Вы успешно вошли!');
            setError(null);
        } else {
            setError('Неправильный логин или пароль');
        }



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
                    <Button type="primary" htmlType="submit">Войти</Button>
                </fieldset>
            </form>
            {error ? (
                <p>{error}</p>
            ) : null}
        </div>
    )
}