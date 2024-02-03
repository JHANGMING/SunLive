import { getCookies } from 'cookies-next';
const getAuthToken = () => {
  const authToken = getCookies().Token;
  if (!authToken) return null;
  return authToken;
};

export default getAuthToken;
