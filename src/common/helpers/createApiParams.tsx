type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiParamsType = {
  apiPath: string;
  method: MethodType;
  authToken?: string;
};

const createApiParams = (
  apiPath: string,
  method: MethodType,
  authToken?: string,
) => {
  const params: ApiParamsType = {
    apiPath,
    method,
  };

  if (authToken) {
    params.authToken = authToken;
  }

  return params;
};
export default createApiParams;
