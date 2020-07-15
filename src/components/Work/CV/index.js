import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const CV = (props) => {
    {
        /*TODO: Grab CV - Polish and English version*/
    }

    return (
        <Row className='cv-container'>
            <Col>
                <h3>CHECK OUT MY RÉSUMÉ!</h3>
                <Button
                    className='cv-grab'
                    href='/v1/src/resume2020.pdf'
                    target='_blank'
                >
                    Grab A Copy
                </Button>
            </Col>
        </Row>
    );
};
export default CV;
