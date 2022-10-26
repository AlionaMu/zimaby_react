import { useState } from 'react';

export const useFetching = (callback: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetching = async (...args: any) => {
    try {
      setLoading(true);
      await callback(...args);
    } catch (e: any) {
        setError(e.message);
    } finally {
        setLoading(false);
    }
  }
  return [fetching, loading, error]
}