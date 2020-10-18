import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function WorkflowPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p className="lead">
                </p>
            </Content>
        </div>
    );

}

export default WorkflowPage;