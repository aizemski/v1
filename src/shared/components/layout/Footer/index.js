import React from 'react';
import { Row, Image, Col, Container } from 'react-bootstrap';
import InstagramLogo from '../../../img/iconmonstr-instagram-11.svg';
import GithubLogo from '../../../img/iconmonstr-github-1.svg';
import LinkedinLogo from '../../../img/iconmonstr-linkedin-1.svg';

const Footer = () => {
    return (
        <Container>
            <Row className='justify-content-center' xs='3' md='3'>
                <Col xs='auto' md='auto'>
                    <a href='https://github.com/aizemski'>
                        <Image src={GithubLogo} />
                    </a>
                </Col>
                <Col xs='auto' md='auto'>
                    <a href='https://www.linkedin.com/in/aizemski/'>
                        <Image src={LinkedinLogo} />
                    </a>
                </Col>
                <Col xs='auto' md='auto'>
                    <a href='https://www.instagram.com/aizemski/'>
                        <Image src={InstagramLogo} />
                    </a>
                </Col>
            </Row>
            <Row className='justify-content-center' md='6' xs='3'>
                ©&nbsp;Aleksander&nbsp;Iżemski&nbsp;2020
            </Row>
        </Container>
    );
};
export default Footer;
