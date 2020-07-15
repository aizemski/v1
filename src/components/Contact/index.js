import React from 'react';
import { Row,Col,Button,Image } from 'react-bootstrap';
import '../../shared/css/contact.css';
import Mail from '../../shared/img/mail.svg'
const Contact = () => {
    const size = '64px';
    return (
        <Row id='contact'>
           
            <Col>
{/* Icons made by https://www.flaticon.com/authors/itim2101*/}
            <Image src={Mail} width={size}/>
            <h2 >
            GET IN TOUCH!
            </h2>
            <Button>Say Hello </Button></Col>
        </Row>
    );
};
export default Contact;
