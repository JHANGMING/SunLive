import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const status = req.body.Status;
    if (status === 'SUCCESS') {
      res.redirect(302, '/payment/success');
    } else {
      res.redirect(302, '/payment/fail');
    }
  } else {
    res.status(405).end();
  }
}
