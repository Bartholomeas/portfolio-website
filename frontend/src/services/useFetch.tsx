import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = <T,>(
  request: () => Promise<AxiosResponse<unknown>['data']>
) => {
  type Data = {
    data: T | undefined;
    // meta: {
    //   pagination: {
    //     page: number;
    //     pageCount: number;
    //     pageSize: number;
    //     total: number;
    //   };
    // };
  };
  const [data, setData] = useState<Data>({} as Data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: '', isError: false });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: res } = await request();
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
