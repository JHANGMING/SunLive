

export type ApiParamsType = {
  apiPath: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  data?: unknown;
  authToken?: string;
  serchQuery?: string;
};

const fetchApi = async(apiParams : ApiParamsType) => {
  const { apiPath, method, data, authToken } = apiParams;
  const url = `${process.env.NEXT_PUBLIC_API_URL}${apiPath}`;
  const requestOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(typeof data === 'object' &&
      data !== null && { body: JSON.stringify(data) }),
    ...(typeof data === 'string' && { body: data }),
  };

  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
 
export default fetchApi;