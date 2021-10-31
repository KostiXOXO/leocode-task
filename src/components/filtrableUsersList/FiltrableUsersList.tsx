import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { defaultFilterOptions } from './configs/fuseFilterOptions';
import { UserService } from 'services';
import useApi from 'utils/hooks/useApi';
import { UsersList, SearchBox } from 'components';
import { IUser } from 'utils/interfaces/IUser';
import { Spinner } from 'components';
import './FiltrableUsersList.scss';

const FiltrableUsersList = ({ threshold = defaultFilterOptions.threshold }: { threshold?: number }) => {
	const { getAllUsers } = UserService;
	const [isLoading, data, error] = useApi<IUser[]>(getAllUsers);

	const [filteredUsers, setFilteredUsers] = useState<null | IUser[]>(null);
	const [filter, setFilter] = useState<string>('');

	useEffect(() => {
		if (data) {
			const fuse = new Fuse(data, { ...defaultFilterOptions, threshold });
			if (filter) {
				const res = fuse.search(filter);
				const filteredUsersList: any = res.map((record) => record.item);
				return setFilteredUsers(filteredUsersList);
			}
			return setFilteredUsers(data);
		}
	}, [filter, data]);

	return isLoading ? (
		<Spinner />
	) : (
		<div className="filtrableUsersListContainer">
			<SearchBox placeholder="Search by user name..." value={filter} onChange={setFilter} />
			<UsersList type="ordered" items={filteredUsers} />
			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default FiltrableUsersList;
