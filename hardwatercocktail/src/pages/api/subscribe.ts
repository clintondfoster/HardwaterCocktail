
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/db';


interface SubscribeRequest extends NextApiRequest {
    body: {
        email: string;
    }
}

export default async function handler(req: SubscribeRequest, res: NextApiResponse) {
    const { email } = req.body;
    if (req.method === 'POST') {
        try {
            const { rows } = await pool.query('INSERT INTO subscribers(email) VALUES($1) RETURNING *', [email]);
            res.status(200).json(rows[0]);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}