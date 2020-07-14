import React from 'react';
import { Row } from 'react-bootstrap';
import '../../shared/css/work.css';
import CV from './CV';
const Work = () => {
    const Tutio = {
        name: 'Tutio',
        desc: 'Desc',
        type: 'Type',
        gitUrl: 'git',
        url: 'url',
    };
    return (
        <Row id='work'>
            {/* TODO: Create CV in English and [Polish]*/}
            <CV/>
            <h1>WHAT I'VE DONE</h1>
            <h2>(more coming soon)</h2>
            {/*TODO: List my projects*/}
        </Row>
    );
};
export default Work;
