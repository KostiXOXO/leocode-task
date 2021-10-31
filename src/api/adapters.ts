import axios, { AxiosResponse } from 'axios';

const returnAxiosInstance = () => {
	return axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
};

const get = (url: string): Promise<AxiosResponse> => {
	const instance = returnAxiosInstance();
	return instance.get(url);
};

export { get };
