import { getCookie, deleteCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { apiPaths } from '@/constants/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string; success?: boolean; message?: string }>
) {
  try {
    const token = getCookie('token', { req, res });
    const apiParams: ApiParamsType = {
      apiPath: apiPaths['logout'],
      method: 'POST',
      authToken: token,
    };
    const result = await fetchApi(apiParams);
    deleteCookie('token', { req, res, path: '/' });
    res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
