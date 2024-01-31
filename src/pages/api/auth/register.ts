import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {
    const { email, password, identity } = JSON.parse(req.body);
    console.log(email, password, identity);
    const category = identity === '一般會員' ? 0 : 1;
    const result = await fetch('http://4.224.41.94/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ account: email, password: password, category }),
    });
    const data = await result.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
