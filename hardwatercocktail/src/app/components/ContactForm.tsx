'use client'
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import {useState, FormEvent } from 'react';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            alert('Message sent successfully!');
        } catch (error: any) {
            console.error('Submission error:', error);
            if (error instanceof Error && error.message) {

            } else {
                setError(error.message);
            }
        } finally {
            setSubmitting(false);
        }
    };
    
    return (
        <div id="contact" className="w-full bg-[#06AEEF] p-8 text-slate-100">
                <h1 className="font-subtitle pb-4 text-center text-xl text-slate-900">Contact Us</h1>
                <p className="pb-4 text-center text-slate-900">Drop us a line to discuss your event.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your Name*"
                        required
                        className="input w-full"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your Email*"
                        required
                        className="input w-full"
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Your Phone"
                        className="input w-full"
                    />
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Your Message*"
                        required
                        className="textarea w-full"
                    />
                    <button type="submit" disabled={isSubmitting} className="btn border-none bg-[#EB4A98] text-white">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {error && <p className="text-center text-red-500">{error}</p>}
            </div>
        );
    }