import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p className="lead">I am a front-end engineer focused on writing clean code and learning new web technologies. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I’ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative. </p>
                <p className="lead">As a person with many interests within my field of work,
                I am very much the fun-loving adventurous type, always seeking new sites and taking on new types of challenges.
                I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking.
                Although I am passionate about living a healthy lifestyle, I do also enjoy the occasional happy hour
              or get together with coworkers and friends. I love to stay busy and on the move, both in and out of the workplace.</p>

            </Content>
        </div>
    );

}

export default AboutPage;