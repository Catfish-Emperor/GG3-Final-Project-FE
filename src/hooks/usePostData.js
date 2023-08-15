import { useState } from 'react';

export function usePostData(url) {
    const [loading, setLoading] = useState(false);

    async function postData(data) {
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                return true;
            } else {
                console.log('Error posting data');
                return false;
            }
        } catch (error) {
            console.error('Error posting data:', error);
            return false;
        } finally {
            setLoading(false);
        }
    }

    return { postData, loading };
}
