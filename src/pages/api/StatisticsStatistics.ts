// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../lib/db'
import { StatisticStatistic } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbResults = await pool.query('SELECT id, name, value FROM Statistic_Statistics').then((res) => res[0] as StatisticStatistic[]);
  return res.status(200).json(dbResults as any);
}
