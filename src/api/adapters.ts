import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const returnAxiosInstance = () => {
	return axios.create({ baseURL: BASE_URL });
};

const get = (url: string): Promise<AxiosResponse> => {
	const instance = returnAxiosInstance();
	return instance.get(url);
};

export { get };
