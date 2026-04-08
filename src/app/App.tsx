import { IUser } from '@/shared/types/types';
import './App.css';
import { UserCard } from '@/entities/user/ui/UserCard';

const mockUsers: IUser[] = [
    { id: '1', name: 'Jon Doe', email: 'a@f', avatar: 'jj' },
    { id: '2', name: 'Angela', email: '$50', avatar: 'fd' },
    { id: '3', name: 'Lucio', email: '$11', avatar: '#' }
]

export const App: React.FC = () => {

    return (
        <div>
            {mockUsers.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar}>

                </UserCard>
            ))}

        </div>
    )
}