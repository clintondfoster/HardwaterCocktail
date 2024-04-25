'use client'
import React, { useState, FormEvent } from 'react';

interface ApiResponse {
    message: string;
  }
  
const SubscribeForm = () => {
    const [email, setEmail] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/subscribers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            const data: ApiResponse = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to subscribe. Please try again later.")
        }
            alert('Thank you for subscribing!');
            setEmail(''); // Clear the form
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
      
    return (
        <form onSubmit={handleSubmit}  aria-live="polite">
            <label htmlFor="email">Email Address:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address*"
                required
            />
           <button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
           {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default SubscribeForm;