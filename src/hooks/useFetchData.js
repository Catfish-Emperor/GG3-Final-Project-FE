import { useState, useEffect } from 'react';

export function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch(url);
            const body = await response.json();
            setData(body);
            setLoading(false);
        } catch (error) {
            console.log('Error while fetching data', error);
        }
        }

        fetchData();
    }, [url]);

    return { data, loading };
}
