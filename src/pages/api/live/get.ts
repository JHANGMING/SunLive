import type { NextApiRequest, NextApiResponse } from 'next';
import { apiPaths } from '@/constants/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {
    const { id } = req.query;
    const apiParams: ApiParamsType = {
      apiPath: `${apiPaths['live']}/${id}`,
      method: 'GET',
    };
    const result = await fetchApi(apiParams);
    res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
