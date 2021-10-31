import { FiltrableUsersList } from 'components';
import React from 'react';
import './Users.scss';

const Users = () => {
	return (
		<div className="usersPageContainer">
			<h2>Users list</h2>
			<FiltrableUsersList />
		</div>
	);
};

export default Users;
