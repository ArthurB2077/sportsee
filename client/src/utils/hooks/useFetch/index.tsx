import { useState, useEffect } from 'react';

export const useFetch = (url : string): unknown => {
    const [data, setData] = useState<object>({})
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
                const data: object = await response.json();
                setData(data);
            }
    
            catch(err: unknown) {
                console.log("Une erreur est survenue", err);
                setError(err);
            }
    
            finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return {isLoading, data, error};
};
