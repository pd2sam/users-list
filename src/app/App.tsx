import { IUser } from '@/shared/types/types';
import './App.css';
import { UserCard } from '@/entities/user/ui/UserCard';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import dayjs from 'dayjs';


export const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://6981cd53c9a606f5d448166e.mockapi.io//users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Ошибка при загрузке:', error);
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
    }

    return (
        <div>

            {users.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar} 
                    createdAt={user.createdAt}/>


            ))}

        </div>
    )
}