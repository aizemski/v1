import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Chaos from '../../../shared/img/chaos.png';
import UDI from '../../../shared/img/udi.png';
const Jobs = () => {
    return (
        <Col className='jobs'>
            <h2 className='jobs-txt'>Worked with</h2>
            <Row
                className='d-flex align-items-center justify-content-center'
                xs={3}
                sm={4}
                lg={5}
            >
                <a href='https://chaosgears.com' target='_blank'>
                    <Col className=' d-flex align-items-center justify-content-center'>
                        <Image className='jobs-logo' src={Chaos} />
                    </Col>
                </a>

                <a href='https://udi.com.pl' target='_blank'>
                    <Col className=' d-flex align-items-center justify-content-center'>
                        <Image className='jobs-logo' src={UDI} />
                    </Col>
                </a>
            </Row>
        </Col>
    );
};
export default Jobs;
