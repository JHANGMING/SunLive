import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { apiPaths } from '@/constants/apiPaths';
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  const buffers: Buffer[] = [];
  const dataReceived = new Promise((resolve, reject) => {
    req.on('data', (chunk) => {
      buffers.push(chunk);
    });

    req.on('end', resolve);
    req.on('error', reject);
  });

  try {
    await dataReceived;
    const data = Buffer.concat(buffers);
    const token = getCookie('token', { req, res });
    const url = `${process.env.NEXT_PUBLIC_API_URL}${apiPaths['uploaduserImg']}`;

    const apiParams: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type':
          req.headers['content-type'] || 'application/octet-stream',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    };
    const result = await fetch(url, apiParams);
    if (!result.ok) {
      throw new Error(`Backend responded with status ${result.status}`);
    }
    const backendData = await result.json();
    res.status(200).json(backendData);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
