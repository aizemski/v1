import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as C } from '../../../shared/img/c.svg';
import { ReactComponent as Cpp } from '../../../shared/img/cpp.svg';
import { ReactComponent as Java } from '../../../shared/img/java.svg';
import { ReactComponent as Linux } from '../../../shared/img/linux.svg';
import { ReactComponent as Git } from '../../../shared/img/git.svg';
const Technologies = () => {
    return (
        <Col className='technologies'>
            {/* TODO: list technologies i've worked with */}
            <Row lg={5} md={3} xs={2}>
                <Col>
                    <Java className='technology-icon' />
                </Col>
                <Col>
                    <Cpp className='technology-icon' />
                </Col>
                <Col>
                    <Linux className='technology-icon' />
                </Col>
                <Col>
                    <Git className='technology-icon' />
                </Col>
                <Col>
                    <C className='technology-icon' />
                </Col>
            </Row>
        </Col>
    );
};
export default Technologies;
