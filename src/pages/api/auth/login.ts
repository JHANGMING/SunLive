import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {
    const { email, password } = JSON.parse(req.body);
 
    const result = await fetch('http://4.224.41.94/api/login/general', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Account: email, Password: password }),
    });
    const data = await result.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
