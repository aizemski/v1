import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import '../../shared/css/welcome.css';

const Welcome = (props) => {
    return (
        <>
            <Row className='welcome-container'>
                <Container className='d-flex align-self-center  flex-column '>
                    <Row>
                        <Col>
                            <h2 className='welcome-txt'>HI, I'M ALEKSANDER</h2>
                            <p className='welcome-txt'>
                                Web Developer & Data Science Enthusiast
                            </p>
                        </Col>
                    </Row>
                    <Row className='align-self-center scrol-down'>
                        <Col className='bounce'> 
                            <a href='#about'>
                                <i class='arrow down'></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </>
    );
};
export default Welcome;
