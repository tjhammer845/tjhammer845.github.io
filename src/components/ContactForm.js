import React, { useState } from 'react';
import { db } from '../firebase';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts')
            .add({
                name: name,
                email: email,
                message: message
            })
            .then(() => {
                alert('Message has been submitted.');
            })
            .catch((error) => {
                alert(error.message);
            });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form id='contact-form' className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='contactName'>Name</label>
                <input type='text' className='form-control' id='contactName'
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='contactEmail'>Email</label>
                <input type='email' className='form-control' id='contactEmail'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='contactMessage'>Message</label>
                <textarea className='form-control' rows='5' id='contactMessage'
                    value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    );
}

export default ContactForm;