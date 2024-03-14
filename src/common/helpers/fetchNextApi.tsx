export type NextapiParamsType = {
  apiPath: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  data?: unknown;
  authToken?: string | null;
};

export default async function fetchNextApi(apiParams: NextapiParamsType) {
  const { apiPath, method, data } = apiParams;
  const url = `${process.env.NEXT_PUBLIC_APIROUTER_URL}${apiPath}`;
  const requestOptions: RequestInit = {
    method,
    ...(typeof data === 'object' && data !== null && { body: JSON.stringify(data) }),
    ...(typeof data === 'string' && { body: data }),
  };
  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
