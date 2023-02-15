import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';

type UserItemPageProps = {

};

type UserItemPageParams = {
    id: string,
}

const UserItemPage: FC<UserItemPageProps> = ({ }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>(); //useParams можно типизировать только с помощью type
    const navigate = useNavigate();

    const getUser = async function () {
        try {
            const { data } = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <button onClick={() => navigate('/users')} >Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.address.city}
            </div>
            <div>
                {user?.address.street}
            </div>
        </div>
    )
}

export default UserItemPage