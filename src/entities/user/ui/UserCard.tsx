import { IUser } from "../../../shared/types/types";
import './UserCard.css'

export function UserCard({name, email, avatar}: IUser) {
    return (
        <div className="user-card">
            <img src={avatar} alt="" />
            <h3>{name}</h3>
            <p>{email}</p>

        </div>
    )
}