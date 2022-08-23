// создать компонент User, который в качестве пропсов получает имя и фамилию
// пользователя и формирует карточку пользователя
// Добавьте компонент User в App и передайте ему в пропсы какие-нибудь
// имя и фамилию

import React from 'react';

export default function User({ firstname, lastname, email, avatar }) {
	return (
		<div>
			<p>firstname: {firstname}</p>
			<p>lastname: {lastname}</p>
			<p>email: {email}</p>
			<p>avatar: {avatar}</p>
		</div>
	);
}
