import { useState, useEffect } from 'react';
import { Infos, Activity, AverageSessions, Performances, FetchResponse } from './../../../types';

export const useFetch = (url : string): FetchResponse => {
    const [data, setData] = useState<Infos | Activity | AverageSessions | Performances | {}>({})
    const [isLoading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>(false)

    useEffect((): void => {
        if (!url) return;

        (async (): Promise<void> => {
            try {
                setLoading(true);
                const response: Response = await fetch(url, {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
            
                });
                const { data } : { data: Infos | Activity | AverageSessions | Performances }  = await response.json();
                setData(data);
            }
    
            catch(err: unknown) {
                console.log(`Une erreur est survenue lors de l'appel de l'url ${url}. Cette erreur contient le message suivant: `, err);
                setError(err);
            }
    
            finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { isLoading: isLoading, data: data, error: error };
};
