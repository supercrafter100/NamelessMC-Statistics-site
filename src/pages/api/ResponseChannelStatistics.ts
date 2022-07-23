// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../lib/db';
import rest from '../../lib/Discord';
import { AutoResponseChannelStatistic } from '../../types';
import { Routes } from "discord-api-types/v9";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const dbResults = await pool.query('SELECT id, channelId, requested FROM ResponseChannel_Statistics').then((res) => res[0] as AutoResponseChannelStatistic[]);
    for (const result of dbResults) {
        if (result.channelId != "thread") {
            const apiChannel = await rest.get(Routes.channel(result.channelId)) as any;
            result.channelId = apiChannel.name;
        }
    }
    
    return res.status(200).json(dbResults as any);
}
