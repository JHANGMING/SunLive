import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {
    const apiParams: ApiParamsType = {
      apiPath: apiPaths['resetpasswordVerify'],
      method: 'POST',
      data: req.body,
    };
    const result = await fetchApi(apiParams);
    res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
