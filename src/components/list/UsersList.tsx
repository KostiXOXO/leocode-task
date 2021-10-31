import React from 'react';
import { DefaultListProps } from './common';
import './UsersList.scss';

const UsersList = ({ type = 'unordered', items }: DefaultListProps) => {
	const itemsListed = items?.map(({ name, username }, key) => {
		return (
			<li key={key}>
				<div>
					<span className="name">
						<strong>{name}</strong>
					</span>
					<span className="username">{`@${username}`}</span>
				</div>
			</li>
		);
	});

	return type === 'unordered' ? (
		<ul className="listContainer unordered">{itemsListed}</ul>
	) : (
		<ol className="listContainer ordered">{itemsListed}</ol>
	);
};

export default UsersList;
