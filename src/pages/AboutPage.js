import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p className="lead">I am a front-end engineer focused on writing clean code and learning new web technologies. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I’ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative. </p>
            </Content>
        </div>
    );

}

export default AboutPage;