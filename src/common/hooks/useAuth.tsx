import { getCookies } from 'cookies-next';

const useAuth = () => {
  const auth = getCookies();
  if (!auth) return null;
  return auth;
};

export default useAuth;
