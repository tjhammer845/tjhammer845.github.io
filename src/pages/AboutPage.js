import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <div className='d-flex flex-column-reverse flex-xl-row justify-content-xl-between'>
                    <div>
                        <p className='lead'>
                            I am a front-end engineer and digital creator focused on clean and modern designs, user-friendly experiences, and writing maintainable and readable code. With a background in web design, I understand the entire process of creating quality websites and content from conception to completion. In the past, I’ve worked on a wide variety of web projects and gained invaluable experience as both a developer and designer. Since the beginning of the Covid pandemic, I have spent my time building and improving my digital startup, acquiring clients, and managing/working on the projects for them.
                            </p>
                        <p>Outside of the workplace, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. I love to stay busy and on the move, both in and out of the workplace.</p>
                    </div>
                    <div className='d-flex justify-content-center justify-content-xl-end'>
                        {props.about.images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description}
                            className='about-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0' />)}
                    </div>
                </div>
            </Content>
        </div >
    );
}

export default AboutPage;