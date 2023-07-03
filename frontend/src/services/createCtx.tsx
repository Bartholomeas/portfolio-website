import React, { createContext, useContext } from 'react';

type CreateContextProps<T> = {
  defaultValue: T;
  displayName?: string;
};

export const createCtx = <T extends unknown>({
  defaultValue,
  displayName,
}: CreateContextProps<T>) => {
  const Context = createContext<T | undefined>(undefined);

  type ContextProviderProps = React.PropsWithChildren<{ value?: T }>;

  function Provider({ value, children }: ContextProviderProps) {
    return (
      <Context.Provider value={value || defaultValue}>
        {children}
      </Context.Provider>
    );
  }

  const useContextHook = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(
        `use${displayName} must be used within a ${displayName}Provider`
      );
    }
    return context;
  };

  Provider.displayName = displayName ?? 'ContextProvider';
  return [Provider, useContextHook] as const;
};
