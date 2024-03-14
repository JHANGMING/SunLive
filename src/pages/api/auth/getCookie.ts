import { getCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = getCookie('token', { req, res });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (token) {
    res.status(200).json({ success: true, message: '已驗證' });
  } else {
    res.status(200).json({ success: false, message: '未授權' });
  }
}
