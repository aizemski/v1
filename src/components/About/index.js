import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Me from '../../shared/img/IżemskiAleksander.jpg';
const About = () => {
    return (
        <>
            <Row id='about' className='justify-content-center'>
                <h1>Few words about me</h1>
            </Row>
            <Row className='justify-content-center'>
                <Col>
                    <Image
                        src={Me}
                        alt='Me'
                        roundedCircle
                        width='256px'
                        height='256px'
                    ></Image>
                </Col>
                <Col>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </Col>
            </Row>
        </>
    );
};
export default About;
