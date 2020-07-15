import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../shared/css/work.css';
import CV from './CV';
import Project from './Project';
const Work = () => {
    const Tutio = {
        name: 'Tutio',
        desc:
            'Tutio is a online tutoring platform implemented as part of the team programming in college. Includes server +\
             (Java + Spring) and web application (React.js + PeerJS). Created in a team of six.',
        type: 'WEB PLATFORM',
        gitUrl: '',
        url: '',
        img: 'tutio.png',
    };

    return (
        <Row id='work'>
            {/* TODO: Create CV in English and [Polish]*/}
            <CV />
            <h1>WHAT I'VE DONE</h1>
            <h2>(more coming soon)</h2>
            {/*TODO: List my projects*/}

            <Row className='work-projects' xs={1} md={2} lg={2} xl={3}>
                <Project
                    name={Tutio.name}
                    desc={Tutio.desc}
                    type={Tutio.type}
                    gitUrl={Tutio.gitUrl}
                    url={Tutio.url}
                    img={Tutio.img}
                />
            </Row>
        </Row>
    );
};
export default Work;
