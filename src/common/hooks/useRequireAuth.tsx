import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookies } from 'cookies-next';

const useRequireAuth = () => {
  const router = useRouter();
  const authToken = getCookies().Token;

  useEffect(() => {
    if (!authToken) {
      router.push('/auth/login');
    }
  }, [authToken, router]);

  return authToken;
};

export default useRequireAuth;
