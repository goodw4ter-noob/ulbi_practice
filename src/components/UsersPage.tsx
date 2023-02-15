import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ITodo, IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

interface UsersPageProps { }

const UsersPage: FC<UsersPageProps> = ({ }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    const getUsers = async function () {
        try {
            const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <List items={users} renderItem={(user: IUser) => <UserItem onClick={() => navigate(`/users/${user.id}`)} key={user.id} user={user} />} />
    )
}

export default UsersPage