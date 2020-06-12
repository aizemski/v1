import React from 'react';
import { Row, Image } from 'react-bootstrap';
import InstagramLogo from '../../../img/iconmonstr-instagram-11.svg';
import GithubLogo from '../../../img/iconmonstr-github-1.svg';
import LinkedinLogo from '../../../img/iconmonstr-linkedin-1.svg';
const Footer = () => {
    return (
        <Row>
            <Image src={GithubLogo} />
            <Image src={LinkedinLogo} />
            <Image src={InstagramLogo} />
        </Row>
    );
};
export default Footer;
