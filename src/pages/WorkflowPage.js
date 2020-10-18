import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function WorkflowPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p className="lead">
                    My development workflow is something I've been constantly improving over the years,
                    and it's always evolving as I discover new tips, tools, methods or applications.
                    I'll list out everything that is typically involved in
                    my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.
                </p>
            </Content>
        </div>
    );

}

export default WorkflowPage;