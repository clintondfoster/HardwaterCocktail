
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/db';


interface ResponseData {
   id?: number;
   email?: string;
   message?: string;
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<ResponseData>) 
    {
    if (req.method === 'POST') {
        const { email } = req.body;
        if (!email || !validateEmail(email)) {
            res.status(400).json({ message: 'Invalid email address' });
            return;
        }
        try {
            const { rows } = await pool.query('INSERT INTO subscribers(email) VALUES($1) RETURNING id, email;',
        [email]);
            res.status(200).json(rows[0]);
        } catch (error: any) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method not allowed' });
    }
}

// Utility function to validate email addresses
function validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}