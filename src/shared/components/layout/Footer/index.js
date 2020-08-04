import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { ReactComponent as InstagramLogo } from '../../../img/iconmonstr-instagram-11.svg';
import { ReactComponent as GithubLogo } from '../../../img/iconmonstr-github-1.svg';
import { ReactComponent as LinkedinLogo } from '../../../img/iconmonstr-linkedin-1.svg';
import '../../../css/footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Container className='footer-container'>
                <Row className='justify-content-center' xs='3' md='3'>
                    <Col xs='auto' md='auto'>
                        <a href='https://github.com/aizemski' target='_blank'>
                            <GithubLogo className='footer-social' />
                        </a>
                    </Col>
                    <Col xs='auto' md='auto'>
                        <a
                            href='https://www.linkedin.com/in/aizemski/'
                            target='_blank'
                        >
                            <LinkedinLogo className='footer-social' />
                        </a>
                    </Col>
                    <Col xs='auto' md='auto'>
                        <a
                            href='https://www.instagram.com/aizemski/'
                            target='_blank'
                        >
                            <InstagramLogo className='footer-social' />
                        </a>
                    </Col>
                </Row>

                <Row
                    className='justify-content-center footer-rights'
                    md='6'
                    xs='3'
                >
                    ©&nbsp;Aleksander&nbsp;Iżemski&nbsp;2020
                </Row>
            </Container>
        </div>
    );
};
export default Footer;
