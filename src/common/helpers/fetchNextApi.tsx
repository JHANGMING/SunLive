
export type apiParamsType = {
  apiPath: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  data?: unknown;
  authToken?: string | null;
};

export default async function fetchNextApi(apiParams: apiParamsType) {
  const { apiPath, method, data } = apiParams;
  const url = `${process.env.NEXT_PUBLIC_APIROUTER_URL}${apiPath}`;
  const requestOptions: RequestInit = {
    method: method,
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
}
