import apiPaths from '@/constants/apiPaths';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {

    const url = `${process.env.NEXT_PUBLIC_API_URL}${apiPaths.register}`;
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:req.body,
    });
    const data = await result.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
