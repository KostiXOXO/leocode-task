import { useState, useEffect } from 'react';
import { IUser } from 'utils/interfaces/IUser';

const useApi = (apiFunction: Function) => {
	const [data, setData] = useState<IUser[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		apiFunction()
			.then((data: IUser[]) => {
				setData(data);
				setIsLoading(false);
			})
			.catch(() => {
				setError('Something went wrong');
				setIsLoading(false);
			});
	}, [apiFunction]);

	return [isLoading, data, error];
};

export default useApi;
