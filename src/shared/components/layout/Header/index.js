import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar expand='md'>
            <Navbar.Brand href='/'>
                <div className='black-txt'>AI</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
                id='basic-navbar-nav'
                className='justify-content-end'
            >
                <Nav.Link href='#about' className='black-txt'>
                    About
                </Nav.Link>
                <Nav.Link href='#work' className='black-txt'>
                    Work
                </Nav.Link>
                <Nav.Link href='#experience' className='black-txt'>
                    Experience
                </Nav.Link>
                <Nav.Link href='#contact' className='black-txt'>
                    Contact
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;
