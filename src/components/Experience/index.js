import React from 'react';
import { Row } from 'react-bootstrap';
import '../../shared/css/experience.css';
import Technologies from './Technologies';


const Experience = () => {
    return (
        <div id='experience'>
            {' '}
            <h1>Experience</h1>
            <p className='about-txt'>
                I've been doing computer science staff for about 4 years and I'm
                eager to learn more in this fast growing industry
            </p>
            <Row>
                <Technologies />
            </Row>
            {/* TODO: list companies i've worked for */}
        </div>
    );
};
export default Experience;
