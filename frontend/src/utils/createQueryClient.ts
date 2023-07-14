export const createQueryClient = () => {
  const fetchMap = new Map<string, Promise<any>>();

  return function queryClient<T>(
    name: string,
    query: () => Promise<T>
  ): Promise<T> {
    if (!fetchMap.has(name)) {
      fetchMap.set(name, query());
    }
    return fetchMap.get(name)!;
  };
};
