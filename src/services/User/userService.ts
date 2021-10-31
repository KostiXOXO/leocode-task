import { get } from 'api/adapters';

const getAllUsers = async () => {
	return await get('/users');
};

export const UserService = { getAllUsers };
