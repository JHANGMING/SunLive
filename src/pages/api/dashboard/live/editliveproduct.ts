import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { apiPaths } from '@/constants/api/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>,
) {
  try {
    const { liveId, liveProductId } = JSON.parse(req.body);
    const token = getCookie('token', { req, res });
    const apiParams: ApiParamsType = {
      apiPath: `${apiPaths.livelist}/${liveId}/${liveProductId}`,
      method: 'PUT',
      authToken: token,
    };
    const result = await fetchApi(apiParams);
    res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
