import { IUser } from "@/entities/user/IUser"
import { useState, useEffect } from "react";
import { Spin, Modal, Input, Form } from "antd";
import { UserCard } from "@/entities/user/ui/UserCard";
import { EditUserModal } from "@/features/EditUserModal";

export function UserPage() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<IUser | null>(null);
    const [form] = Form.useForm();
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const showEditModal = (user: IUser) => {
        setEditingUser(user);
        setIsEditModalOpen(true);
    };

    const handleUpdateUser = (updatedUser: IUser) => {
        const values = form.getFieldsValue();
        setUsers(prev => prev.map(u => u.id === editingUser?.id ? updatedUser : u));
        setIsEditModalOpen(false);
    }

    const handleDelete = (id: string) => {
        Modal.confirm({
            title: 'are you sure?',
            content: 'eto deystvie nelzya budet otmenit',
            onOk: () => setUsers(users.filter(u => u.id !== id)),
        });
    };

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
                    {...user}
                    onEdit={() => showEditModal(user)}
                    onDelete={() => handleDelete(user.id)}
                />
            ))}

        </div>
        <EditUserModal
            isOpen={isEditModalOpen}
            user={editingUser}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleUpdateUser}
        />
    </>



}