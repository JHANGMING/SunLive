import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { fetchAuthStatus } from '@/common/helpers/fetchAuthStatus';

export function useAuthStatus() {
  const [authStatus, setAuthStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAuthStatus = getCookie('authStatus');
    if (savedAuthStatus === 'true') {
      const isAuth = savedAuthStatus === 'true';
      setAuthStatus(isAuth);
      setLoading(false);
    } else {
      const fetchStatus = async () => {
        const status = await fetchAuthStatus();
        setCookie('authStatus', status ? 'true' : 'false');
        setAuthStatus(status);
        setLoading(false);
      };

      fetchStatus();
    }
  }, []);

  return { authStatus, loading };
}
