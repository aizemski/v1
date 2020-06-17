import React from 'react';
import '../../shared/css/welcome.css';
import { Row, Col, Image, Container } from 'react-bootstrap';

const Welcome = (props) => {
    return (
        <Row className='welcome-container'>
            <Container className='d-flex align-self-center justify-content-center'>
                <Row>
                    <Col>
                        <h2 className='welcome-h2'>HI, I'M ALEKSANDER</h2>
                        <h3 className='welcome-h3'>
                            Web Developer & Data Science Enthusiast
                        </h3>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
};
export default Welcome;
