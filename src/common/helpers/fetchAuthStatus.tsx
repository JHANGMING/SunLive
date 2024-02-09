export async function fetchAuthStatus() {
  try {
    const response = await fetch('/api/auth/getCookie', {
      credentials: 'include',
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    // console.error('Error fetching auth status', error);
    return false;
  }
}
