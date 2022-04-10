import React, { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { DataProvided } from './../../types';

export const DataContext = createContext<unknown | null>(null);

interface Props {
    children : React.ReactNode
};

export const DataProvider = ({ children }: Props ): JSX.Element => {
    const userId : number = 12;
    const dataProvided : DataProvided  = {
        userInfos: useFetch(`http://localhost:3000/user/${userId}`),
        userActivity: useFetch(`http://localhost:3000/user/${userId}/activity`),
        userSessions: useFetch(`http://localhost:3000/user/${userId}/average-sessions`),
        userPerformances: useFetch(`http://localhost:3000/user/${userId}/performance`),
    };

    return(
        <DataContext.Provider value={dataProvided}>
            {children}
        </DataContext.Provider>
    );
}; 