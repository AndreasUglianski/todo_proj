import React from 'react';
import { users } from './data/users';
import User from './User';

export default function UsersList() {
	return (
		<div>
			{users.map((elem) => (
				<User key={elem.id} {...elem} />
			))}
		</div>
	);
}

// используя массив users создайте множество компонентов User (по компоненту на кадлый элемент массива)
// для этого используйте метод map
// не забудьте про key
