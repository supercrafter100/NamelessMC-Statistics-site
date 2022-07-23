// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../lib/db'
import { ThreadCreateStatistic } from '../../types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.full === 'true') {
	const dbResults = await pool.query('SELECT id, day, month, year, amount FROM ThreadCreation_Statistics ORDER BY id ASC').then((res) => res[0] as ThreadCreateStatistic[]);
	for (const result of dbResults) {
		result.dateString = `${result.day}/${result.month + 1}/${result.year}`;
	}
	return res.status(200).json(dbResults as any);
  }
  const dbResults = await pool.query('SELECT * FROM ( SELECT id, day, month, year, amount FROM ThreadCreation_Statistics ORDER BY id DESC LIMIT 30 ) sub ORDER BY id ASC').then((res) => res[0] as ThreadCreateStatistic[]);
  for (const result of dbResults) {
	result.dateString = `${result.day}/${result.month + 1}/${result.year}`;
  }
  return res.status(200).json(dbResults as any);
}
