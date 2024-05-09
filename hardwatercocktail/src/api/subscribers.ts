import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../database/db';
import validator from 'validator';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("recieved body:", req.body)

    if (req.method === 'POST') {
        const { email } = req.body;
        
        // Validate the email input
        if (!email || !validator.isEmail(email)) {
            return res.status(400).json({ error: 'A valid email is required' });
        }

        try {
            const { rows } = await pool.query(
                'INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *;',
                [email]
            );
            if (rows.length > 0) {
                return res.status(201).json(rows[0]);
            } else {
                return res.status(409).json({ error: 'This email is already subscribed' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
