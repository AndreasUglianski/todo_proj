import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { data } from './data/todo';
import Counter from './Counter';
import User from './User';
import UsersList from './UsersList';

function App() {
	return (
		<div>
			<ToDoForm />
			<ToDoList data={data} />
			<UsersList />

			{/* <Counter /> */}
		</div>
	);
}

export default App;
// импортировать в UsersList данные пользователей и вывести их в консоль
// изменить компонент User таким образом, чтобы в карточке пользователя выводились
// его имя, фамилия, email и аватар(текстом)
// использовать компонент User в UsersList и подставить данные руками (не из массива users)
