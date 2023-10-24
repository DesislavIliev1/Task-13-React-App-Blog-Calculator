import React, { useState } from 'react';
import './Contacts.css'

function Contacts(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <br />
            <button className='button-submit' type="submit">Submit</button>
        </form>
    );
}

export default Contacts;