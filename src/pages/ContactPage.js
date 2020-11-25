import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'


const ContactPage = (props) => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-portfolio-contact-21e8f.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={updateInput}
                    value={formData.name || ''}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={updateInput}
                    value={formData.email || ''}
                />
                <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    onChange={updateInput}
                    value={formData.message || ''}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactPage






// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import Content from '../components/Content';
// import { db } from '../firebase';

//         <div>
//             <Hero title={props.title} />
//             <Content>
//                 <form id='contact-form' className='form' onSubmit={handleSubmit}>
//                     <div className='form-group'>
//                         <label htmlFor='contactName'>Name</label>
//                         <input type='text' className='form-control' id='contactName'
//                             value={name} onChange={(e) => setName(e.target.value)} />
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='contactEmail'>Email</label>
//                         <input type='email' className='form-control' id='contactEmail'
//                             value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='contactMessage'>Message</label>
//                         <textarea className='form-control' rows='5' id='contactMessage'
//                             value={message} onChange={(e) => setMessage(e.target.value)} />
//                     </div>
//                     <div className='form-group'>
//                         <button type='submit' className='btn btn-primary'
//                             style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}>Submit</button>
//                     </div>
//                 </form>
//             </Content>
//         </div>