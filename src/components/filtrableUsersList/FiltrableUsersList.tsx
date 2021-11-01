import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { defaultFilterOptions } from './configs/fuseFilterOptions';
import { IUser } from 'utils/interfaces/IUser';
import { SearchBox, UsersList } from 'components';
import './FiltrableUsersList.scss';

interface IProps {
	data: IUser[];
	threshold?: number;
}

const FiltrableUsersList = ({ data, threshold = defaultFilterOptions.threshold }: IProps) => {
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

	return (
		<div className="filtrableUsersListContainer">
			<SearchBox placeholder="Search by user name..." value={filter} onChange={setFilter} />
			<UsersList type="ordered" items={filteredUsers} />
		</div>
	);
};

export default FiltrableUsersList;
