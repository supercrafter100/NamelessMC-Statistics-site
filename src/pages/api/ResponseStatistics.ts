// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../lib/db'
import { AutoResponseStatistic } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbResults = await pool.query('SELECT id, title, requested FROM Response_Statistics').then((res) => res[0] as AutoResponseStatistic[]);
  return res.status(200).json(dbResults as any);
}
