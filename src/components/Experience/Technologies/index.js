import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as C } from '../../../shared/img/c.svg';
import { ReactComponent as Cpp } from '../../../shared/img/cpp.svg';
import { ReactComponent as Java } from '../../../shared/img/java.svg';
import { ReactComponent as Linux } from '../../../shared/img/linux.svg';
import { ReactComponent as Git } from '../../../shared/img/git.svg';
import { ReactComponent as JS } from '../../../shared/img/javascript.svg';
import { ReactComponent as ReactJS } from '../../../shared/img/react.svg';
import { ReactComponent as HTML } from '../../../shared/img/html.svg';
import { ReactComponent as CSS } from '../../../shared/img/css.svg';
import { ReactComponent as Bootstrap } from '../../../shared/img/bootstrap.svg';
import { ReactComponent as NodeJS } from '../../../shared/img/nodejs.svg';
import { ReactComponent as Python } from '../../../shared/img/python.svg';
import { ReactComponent as TensorFlow } from '../../../shared/img/tensorflow.svg';
import { ReactComponent as Visual } from '../../../shared/img/visual-studio-code.svg';
import { ReactComponent as MySQL } from '../../../shared/img/mysql.svg';

const Technologies = () => {
    return (
        <Col className='technologies'>
            {/* TODO: list technologies i've worked with */}
            <h2 className='technologies-txt'>Technologies</h2>
            <Row xs={3} sm={4} lg={5}>
                <Col>
                    <JS className='technology-icon' />
                </Col>
                <Col>
                    <HTML className='technology-icon' />
                </Col>
                <Col>
                    <CSS className='technology-icon' />
                </Col>
                <Col>
                    <ReactJS className='technology-icon' />
                </Col>
                <Col>
                    <Python className='technology-icon' />
                </Col>
                <Col>
                    <TensorFlow className='technology-icon' />
                </Col>
                <Col>
                    <Visual className='technology-icon' />
                </Col>
                <Col>
                    <MySQL className='technology-icon' />
                </Col>
                <Col>
                    <NodeJS className='technology-icon' />
                </Col>
                <Col>
                    <Bootstrap className='technology-icon' />
                </Col>
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
