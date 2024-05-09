import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../database/db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        console.log("Received body:", req.body);
        const { name, email, phone, message } = req.body;

        // Basic validation
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: 'Valid name is required' });
        }
        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }
        if (phone && typeof phone !== 'string') { // Phone is optional, but if provided, it must be a string
            return res.status(400).json({ error: 'Phone must be a string' });
        }
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Message is required and must be a string' });
        }

        try {
            const { rows } = await pool.query(
                'INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id;',
                [name, email, phone, message]
            );
            res.status(201).json(rows[0]);
        } catch (error: any) {
            console.error("Database error:", error);
            res.status(500).json({ message: 'Internal server error', errorDetail: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}