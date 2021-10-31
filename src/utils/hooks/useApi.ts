import { useState, useEffect } from 'react';

const useApi = <T = any>(apiFunction: Function) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		apiFunction()
			.then(({ data }: { data: T }) => {
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
