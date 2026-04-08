import dayjs from "dayjs";
import { IUser } from "../../../shared/types/types";
import './UserCard.css'

export function UserCard({name, createdAt, avatar}: IUser) {
    return (
        <div className="user-card">
            <img src={avatar} alt="" />
            <h3>{name}</h3>
            <p>Зарегестрирован: {dayjs(createdAt).format('DD-MM-YYYY, HH:mm')}</p>

        </div>
    )
}