import React, { useState } from 'react';
import { Row, Col, Image, Modal, Button } from 'react-bootstrap';

const Details = (props) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    <h3>{props.name}</h3>
                    <h6> {props.type}</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='work-project-popup'>
                <Image src={props.image} />

                <p className='work-project-popup-desc'>{props.desc}</p>
                <Row className='justify-content-center'>
                    {props.ulr && (
                        <a href={props.url}>
                            <p className='work-project-popup-link'>
                                VISIT SITE
                            </p>
                        </a>
                    )}
                    {props.ulr && props.git && (
                        <p className='work-project-popup-link-or'>or</p>
                    )}
                    {props.git && (
                        <a href={props.git}>
                            <p className='work-project-popup-link'>
                                VIEW SOURCE
                            </p>
                        </a>
                    )}
                </Row>
            </Modal.Body>
            <Modal.Footer className='work-project-popup-footer'>
                <Button
                    onClick={props.onHide}
                    className='work-project-popup-footer-button'
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
const Project = (props) => {
    {
        /*TODO: Base on props  generate*/
    }

    const image = require('../../../shared/img/projects/' + props.img);
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Col className='work-project' onClick={() => setModalShow(true)}>
                <div className='work-project-item'>
                    <Image src={image} />
                    {console.log(props.img)}
                </div>
            </Col>
            <Details
                show={modalShow}
                onHide={() => setModalShow(false)}
                name={props.name}
                type={props.type}
                image={image}
                desc={props.desc}
                git={props.gitUrl}
                url={props.url}
            />
        </>
    );
};
export default Project;
