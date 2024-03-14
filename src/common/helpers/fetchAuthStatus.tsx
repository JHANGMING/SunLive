const fetchAuthStatus = async () => {
  try {
    const response = await fetch('/api/auth/getCookie', {
      credentials: 'include',
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default fetchAuthStatus;
