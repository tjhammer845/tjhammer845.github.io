import React, { useState } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { db } from '../firebase';

const ContactPage = (props) => {
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
        <div>
            <Hero title={props.title} />
            <Content>
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
            </Content>
        </div>

    );
}

export default ContactPage;






// import React from 'react';
// import Hero from '../components/Hero';
// import Content from '../components/Content';
// import ContactForm from '../components/ContactForm';



// function ContactPage(props) {
//     return (
//         <div>
//             <Hero title={props.title} />
//             <Content>
//                 <ContactForm />
//             </Content>
//         </div>
//     );
// }

// export default ContactPage;