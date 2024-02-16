import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {
    const token = getCookie('token', { req, res });
    const apiParams: ApiParamsType = {
      apiPath: apiPaths['check'],
      method: 'GET',
      authToken: token,
    };

    const result = await fetchApi(apiParams);
    res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
