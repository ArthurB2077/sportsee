import React, { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { DataProvided } from './../../types';


interface Props {
    children : React.ReactNode
};


/**
 * @description Default state for the DataProvider context
 */

const defaultState : DataProvided = {
    userInfos: { isLoading: true, data: null, error: false },
    userActivity: { isLoading: true, data: null, error: false },
    userSessions: { isLoading: true, data: null, error: false },
    userPerformances: { isLoading: true, data: null, error: false },
}


/**
 * @description The data provider context object
 */

export const DataContext = createContext<DataProvided>(defaultState);


/**
 * @description The DataProvider context
 */

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