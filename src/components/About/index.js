import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Me from '../../shared/img/IżemskiAleksander.jpg';
import '../../shared/css/about.css';
import Infographic from './Infographic';
const About = () => {
    return (
        <>
            <Row id='about' className='justify-content-center about'>
                <h1>Few words about me</h1>
            </Row>
            <Row className='justify-content-center about-row'>
                <Image
                    src={Me}
                    alt='Me'
                    roundedCircle
                    width='192px'
                    height='240px'
                ></Image>
            </Row>
            <Row className='justify-content-between about-row'>
                <Col>
                    <p className='about-txt'>
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
            <Infographic />
        </>
    );
};
export default About;
