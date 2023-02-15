import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { ITodo } from '../types/types';
import List from './List'
import TodoItem from './TodoItem'

interface TodosPageProps { }

const TodosPage: FC<TodosPageProps> = ({ }) => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    
    const getTodos = async function () {
        try {
            const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />
    )
}

export default TodosPage