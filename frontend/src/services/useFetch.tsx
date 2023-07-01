import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = <T,>(
  request: () => Promise<AxiosResponse<T>['data']>
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{
    message: unknown;
    isError: boolean;
  }>({
    message: '',
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: res } = (await request()) as AxiosResponse<T[]>;
        setData(res);
      } catch (err) {
        setError({ message: err, isError: true });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};
