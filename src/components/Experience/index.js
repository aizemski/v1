import React from 'react';
import { Row, Fade } from 'react-bootstrap';
import '../../shared/css/experience.css';
import Technologies from './Technologies';
import Jobs from './Jobs';
import FadeIn from '../../shared/components/FadeIn';

const Experience = () => {
    return (
        <div id="experience">
            <FadeIn>
                <h1>Experience</h1>
                <p className="about-txt">
                    I've been doing computer science staff for about 4 years and
                    I'm eager to learn more in this fast growing industry
                </p>
            </FadeIn>
            <FadeIn>
                <Row>
                    <Jobs />
                </Row>
            </FadeIn>
            <FadeIn>
                <Row>
                    <Technologies />
                </Row>
            </FadeIn>
        </div>
    );
};
export default Experience;
