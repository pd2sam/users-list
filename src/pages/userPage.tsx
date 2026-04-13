import { IUser } from "@/shared/types/types"
import { useState, useEffect } from "react";
import { Spin } from "antd";
import { UserCard } from "@/entities/user/ui/UserCard";





export function UserPage() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://6981cd53c9a606f5d448166e.mockapi.io/users');
                if (!response.ok) {
                    throw new Error('Не удалось загрузить данные');
                }
                const data = await response.json();
                setUsers(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError('Что-то пошло не так');
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [])
    if (isLoading) {
        return <div>
            <Spin />
        </div>
    };
    if (error) {
        return <p>Ошибка: {error}</p>
    }
    return <>
        <div>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    createdAt={user.createdAt}
                    avatar={user.avatar}
                />
            ))}
        </div>
    </>



}