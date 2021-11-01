import React from 'react';
import { UserService } from 'services';
import useApi from 'utils/hooks/useApi';
import { IUser } from 'utils/interfaces/IUser';
import { FiltrableUsersList, Spinner } from 'components';
import './Users.scss';

const Users = () => {
	const { getAllUsers } = UserService;
	const [isLoading, data, error] = useApi<IUser[]>(getAllUsers);

	return isLoading ? (
		<Spinner />
	) : (
		<div className="usersPageContainer">
			<h2>Users list</h2>
			{data && <FiltrableUsersList data={data} />}
			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default Users;
