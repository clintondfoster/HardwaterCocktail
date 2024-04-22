
import { useState, FormEvent } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert('Thank you for subscribing!');
            setEmail(''); // Clear the form
        } else {
            alert('Failed to subscribe. Please try again!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address*"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SubscribeForm;