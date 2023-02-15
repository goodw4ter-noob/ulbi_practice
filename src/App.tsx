import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';


function App() {
	// const onClick = function (num: number) {
	// 	console.log(num);
	// };

	const routes = [
		{path: '/users', element: <UsersPage />},
		{path: '/todos', element: <TodosPage />},
		{path: '/users/:id', element: <UserItemPage />},
		{path: '/todos/:id', element: <TodoItemPage />},
	];

	return (
		<div className="App">
			{/* <EventsExample />
			<Card onClick={onClick} width='400px' height='200px' variant={CardVariant.outlined}>
				<button>click</button>
			</Card> */}
			<div>
				<Link to={'/users'}>Пользователи</Link>
				<Link to={'/todos'}>Задачи</Link>
			</div>
			<Routes>
				{routes.map(route => <Route path={route.path} element={route.element} />)}
			</Routes>
		</div>
	)
}

export default App
