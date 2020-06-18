import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../css/header.css';
const Header = () => {
    return (
        <Navbar expand='md' className='header'>
            <Navbar.Brand href='/'>
                <div className='header-nav header-logo'>AI</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav header-nav-toggel' />
            <Navbar.Collapse
                id='basic-navbar-nav'
                className='justify-content-end'
            >
                <Nav.Link href='#about' className='header-nav'>
                    About
                </Nav.Link>
                <Nav.Link href='#work' className='header-nav'>
                    Work
                </Nav.Link>
                <Nav.Link href='#experience' className='header-nav'>
                    Experience
                </Nav.Link>
                <Nav.Link href='#contact' className='header-nav'>
                    Contact
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;
