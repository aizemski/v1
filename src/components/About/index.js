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
                        Hello! My name is Aleksander and I'm a programmer with
                        passion for front end and data science. I'm currently a
                        third year student at{' '}
                        <a href='https://www.umk.pl/en/'>
                            Nicolaus&nbsp;Copernicus&nbsp;University
                        </a>{' '}
                        pursuing a engineer degree in{' '}
                        <a href='https://www.mat.umk.pl/en_GB/web/en/studies'>
                            Computer&nbsp;Science.
                        </a>
                    </p>
                </Col>
            </Row>
            <Infographic />
        </>
    );
};
export default About;
