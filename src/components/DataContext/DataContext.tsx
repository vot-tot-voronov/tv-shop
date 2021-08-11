import React, { createContext, useState, useContext, ReactChild, ReactChildren } from 'react';

type contextProps = {
    data: number[];
    setValues: (value: number[]) => void
};
type dataContextProviderChildren = {
    children: ReactChild | ReactChildren;
}

const phoneNumber: number[] = Array.from({ length: 10 }, (v, i) => -1);
const contextDefaultValues: contextProps = {
    data: [],
    setValues: () => {}
}
const DataContext = createContext<contextProps>(contextDefaultValues);

export const DataProvider = ({children}: dataContextProviderChildren ) => {
    const [data, setData] = useState<number[]>(phoneNumber);
    const setValues = (value: number[]) => setData(value);
    return (
        <DataContext.Provider value={{data, setValues}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
