import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Data from '../../../shared/img/computer.svg';
import Keyboard from '../../../shared/img/electronic.svg';
import Gym from '../../../shared/img/gym.svg';
const Infographic = (prosp) => {
    const size = '64px';
    return (
        <div id='infographic'>
            <Row className=' about-row about-txt '>
                <p className='about-txt'>SELF PROCLAMATIONS:</p>
            </Row>
            <Row
                className='justify-content-center about-row about-txt infographic-row'
                xs={1}
                sm={2}
                md={3}
            >
                <Col className='d-flex flex-column align-items-center'>
                    <Image width={size} src={Data}></Image>
                    {/*https://www.flaticon.com/authors/pixel-perfect*/}
                    <p className='infographic-txt'>Data Science</p>
                </Col>
                <Col className='d-flex flex-column align-items-center'>
                    <Image width={size} src={Keyboard}></Image>
                    {/*https://www.flaticon.com/authors/pixel-perfect*/}
                    <p className='infographic-txt'>Web Developer</p>
                </Col>
                <Col className='d-flex flex-column align-items-center'>
                    <Image width={size} src={Gym}></Image>
                    {/*https://www.flaticon.com/authors/pixel-perfect*/}
                    <p className='infographic-txt'>Weightlifter</p>
                </Col>
            </Row>
        </div>
    );
};

export default Infographic;
