import React, { createContext, useState, useContext, ReactChild, ReactChildren } from 'react';

type contextProps = {
    data: number[],
    setValues: Function
};
type dataContextProviderChildre = {
    children: ReactChild | ReactChildren;
}
const phoneNumber: number[] = Array.from({ length: 11 }, (v, i) => -1);
const DataContext = createContext<Partial<contextProps>>({});

export const DataProvider = ({children}: dataContextProviderChildre ) => {
    const [data, setData] = useState<number[]>(phoneNumber);
    const setValues = (value: number[]) => {
        setData(prevState => ({
            ...prevState,
            ...value
        }));
    };
    return (
        <DataContext.Provider value={{data, setValues}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
