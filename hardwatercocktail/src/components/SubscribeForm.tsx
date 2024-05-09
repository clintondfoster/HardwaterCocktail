'use client'
import React, { useState, FormEvent } from 'react';
import Image from 'next/image'

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
        <div className="bg-cover bg-center h-full" style={{backgroundImage: "url('/videos/cocktail-cheers.jpeg')"}} >
            <h1>ADDING TO SUBSCRIBE FORM</h1>
            <form onSubmit={handleSubmit}  className="flex flex-col items-center justify-center h-full" aria-live="polite">
                <label htmlFor="email" className="text-white">Email Address:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address*"
                    required
                    className="bg-white text-black rounded-lg py-2 px-4 mb-4 w-full max-w-sm"
                />
            <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: '100%', maxWidth: '10rem'}}>
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default SubscribeForm;