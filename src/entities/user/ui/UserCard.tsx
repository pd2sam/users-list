import dayjs from "dayjs";
import { IUser } from "../IUser";
import './UserCard.css'

interface IUserCardProps extends IUser {
    onEdit: () => void;
    onDelete: () => void;
}
export function UserCard({name, createdAt, avatar, onEdit, onDelete}: IUserCardProps) {
    return (
        <div className="user-card">
            <img src={avatar} alt="" />
            <h3>{name}</h3>
            <p>Зарегестрирован: {dayjs(createdAt).format('DD-MM-YYYY, HH:mm')}</p>
            <button onClick={onEdit}>Edit User</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}