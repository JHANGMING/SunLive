
import type { NextApiRequest, NextApiResponse } from 'next';
import { apiPaths } from '@/constants/api/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>,
) {
  try {
    const { email, password } = JSON.parse(req.body);

    const apiParams: ApiParamsType = {
      apiPath: apiPaths.login,
      method: 'POST',
      data: { account: email, password },
    };
    const result = await fetchApi(apiParams);
    res.status(200).json(result);
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
