import { useState, useEffect } from 'react';
import getAuthToken from '@/common/helpers/getAuthToken';

export const useToken = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

