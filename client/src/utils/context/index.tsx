import React, { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const DataContext = createContext<unknown | null>(null);

interface Props {
    children : React.ReactNode
};

export const DataProvider = ({ children }: Props ): JSX.Element => {
    const userId = 12;
    const dataProvided = {
        userInfos: useFetch(`http://localhost:3000/user/${userId}`),
        userActivity: useFetch(`http://localhost:3000/user/${userId}/activity`),
        userSessions: useFetch(`http://localhost:3000/user/${userId}/average-sessions`),
        userPerformances: useFetch(`http://localhost:3000/user/${userId}/performance`),
    };

    console.log(dataProvided);

    return(
        <DataContext.Provider value={dataProvided}>
            {children}
        </DataContext.Provider>
    );
}; 