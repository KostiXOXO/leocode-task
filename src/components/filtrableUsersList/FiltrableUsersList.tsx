import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { filterOptions } from './configs/fuseFilterOptions';
import { userService } from 'services';
import { UsersList, SearchBox } from 'components';
import { IUser } from 'utils/interfaces/IUser';
import './FiltrableUsersList.scss';
import useApi from 'utils/hooks/useApi';
import { Spinner } from 'components';

const FiltrableUsersList = () => {
	const { getAllUsers } = userService;
	const [isLoading, data, error] = useApi(getAllUsers);

	const [users, setUsers] = useState<null | IUser[]>(data as IUser[]);
	const [filteredUsers, setFilteredUsers] = useState<null | IUser[]>(null);
	const [filter, setFilter] = useState<string>('');

	useEffect(() => {
		setUsers(data as IUser[]);
	}, [data]);

	useEffect(() => {
		if (users) {
			const fuse = new Fuse(users, filterOptions);
			if (filter) {
				const res = fuse.search(filter);
				const filteredUsersList: any = res.map((record) => record.item);
				setFilteredUsers(filteredUsersList);
				return;
			}
			setFilteredUsers(users);
		}
	}, [filter, users]);

	return isLoading ? (
		<Spinner />
	) : (
		<div className="filtrableUsersListContainer">
			<SearchBox placeholder="Search by user name..." value={filter} onChange={setFilter} />
			<UsersList type="ordered" items={filteredUsers} />
		</div>
	);
};

export default FiltrableUsersList;
