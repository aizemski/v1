import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        // <Nav className='justify-content-end'>
        //     <Nav.Link href='#about'>About</Nav.Link>
        //     <Nav.Link href='#work'>Work</Nav.Link>
        //     <Nav.Link href='#experience'>Experience</Nav.Link>
        //     <Nav.Link href='#contact'>Contact</Nav.Link>
        // </Nav>
        // <Navbar>
        //     {' '}
        //     <Navbar.Toggle aria-controls='basic-navbar-nav' />
        //     <Navbar.Collapse
        //         id='basic-navbar-nav'
        //         className='justify-content-end'
        //     >
        //         <Nav.Link href='#about'>About</Nav.Link>
        //         <Nav.Link href='#work'>Work</Nav.Link>
        //         <Nav.Link href='#experience'>Experience</Nav.Link>
        //         <Nav.Link href='#contact'>Contact</Nav.Link>
        //     </Navbar.Collapse>
        // </Navbar>
        <Navbar className='pl-3 pl-4 pr-5' expand='md'>
            <Navbar.Brand href='/'>AI</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
                id='basic-navbar-nav'
                className='justify-content-end'
            >
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#work'>Work</Nav.Link>
                <Nav.Link href='#experience'>Experience</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;
{
    /* <Row>About Experience Work Contact</Row> */
}
