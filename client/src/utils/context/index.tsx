import React, { createContext } from 'react';
import { useFetch, useFetchMockedData } from '../hooks/useFetch';
import { DataProvided } from './../../types';
import { useParams, useLocation } from 'react-router-dom'


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
    const userId : string | undefined = useParams().userId;
    const searchParams : string | undefined = useLocation().search;

    const dataProvided : DataProvided  = {
        userInfos: useFetch(`http://localhost:3000/user/${userId}`),
        userActivity: useFetch(`http://localhost:3000/user/${userId}/activity`),
        userSessions: useFetch(`http://localhost:3000/user/${userId}/average-sessions`),
        userPerformances: useFetch(`http://localhost:3000/user/${userId}/performance`),
    };

    const mockedDataProvided : DataProvided  = {
        userInfos: useFetchMockedData('/mocks/userMain.json', userId),
        userActivity: useFetchMockedData('/mocks/userActivity.json', userId),
        userSessions: useFetchMockedData('/mocks/userAverageSessions.json', userId),
        userPerformances: useFetchMockedData('/mocks/userPerformances.json', userId),
    }

    return(
        <DataContext.Provider value={searchParams === '?mockedData' ? mockedDataProvided : dataProvided}>
            {children}
        </DataContext.Provider>
    );
};