import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import '../../shared/css/contact.css';
import Mail from '../../shared/img/mail.svg';
const Contact = () => {
    return (
        <Row id='contact' className='justify-content-center'>
            <Col className='contact-container d-flex flex-column align-items-center '>
                {/* Icons made by https://www.flaticon.com/authors/itim2101*/}
                <Image src={Mail} />
                <h2>GET IN TOUCH!</h2>
                <p>
                    {' '}
                    In case you have an idea for a project or just want to chat,
                    feel free to shoot me an email!
                </p>
                <Button
                    className='contact-button'
                    href='mailto:aleksanderizemski@gmail.com'
                >
                    Say Hello{' '}
                </Button>
            </Col>
        </Row>
    );
};
export default Contact;
