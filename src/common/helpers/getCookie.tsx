
import { getCookies } from 'cookies-next';

const useAuthToken = () => {

  const authToken = getCookies().Token;

  return authToken;
};

export default useAuthToken;
