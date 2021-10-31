import { get } from '../adapters';

const getAllUsers = async () => {
	return await get('/users');
};

export { getAllUsers };
