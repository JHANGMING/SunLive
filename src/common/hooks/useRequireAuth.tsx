import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStatus } from './useAuthStatus';

const useRequireAuth = () => {
  const router = useRouter();
  const { authStatus, loading } = useAuthStatus(); 

  useEffect(() => {
    if (loading) return;
    if (!authStatus) {
      router.push('/auth/login');
    }
  }, [authStatus, loading, router]); 

  return authStatus;
};

export default useRequireAuth;
