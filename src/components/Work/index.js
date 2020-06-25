import React from 'react';
import { Row } from 'react-bootstrap';
import '../../shared/css/work.css';
const Work = () => {
    return (
        <Row id='work'>
            {/* TODO: Create CV in English */}
            <p className='about-txt'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
            </p>
            {/*TODO: List my projects*/}
        </Row>
    );
};
export default Work;
