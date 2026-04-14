import { useState, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { IUser } from "@/entities/user/IUser";


interface EditUserModalProps {
    isOpen: boolean;
    user: IUser | null;
    onClose: () => void;
    onSave: (updatedUser: IUser) => void;
}

export const EditUserModal = ({ isOpen, user, onClose, onSave }: EditUserModalProps) => {
    const [form] = Form.useForm();
    useEffect(() => {
        if (user) form.setFieldsValue(user);
    }, [user, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (user) {
                onSave({ ...user, ...values });
            }
        } catch (error) {
            console.error('validation error:', error);
        }

    };
    return (
        <Modal
            title="Edit"
            open={isOpen}
            onOk={handleOk}
            onCancel={onClose}
            okText='Save'
            cancelText='Cancel'
        >
            <Form form={form} layout="vertical">
                <Form.Item name='name' label='User Name' rules={[{ required: true, message: 'name is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name='avatar'
                    label='avatar source(URL)'
                    rules={[{ required: true, message: 'avatar URL is required' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}
