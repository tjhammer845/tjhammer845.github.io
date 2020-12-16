import React, { useState } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


const ContactPage = (props) => {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <form id='contact-form' className='form'>
                    <div className='form-group'>
                        <label htmlFor='contactName'>Name</label>
                        <input type='text' className='form-control' id='contactName'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='contactEmail'>Email</label>
                        <input type='email' className='form-control' id='contactEmail'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='contactMessage'>Message</label>
                        <textarea className='form-control' rows='5' id='contactMessage'
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </Content>
        </div>
    )
}

export default ContactPage






