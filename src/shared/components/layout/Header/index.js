import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../../css/header.css';
const Header = () => {
    const navs = document.getElementsByClassName('nav-link');

    window.addEventListener('scroll', () => {
        const about = document.getElementById('about').getBoundingClientRect();
        const work = document.getElementById('work').getBoundingClientRect();
        const experience = document
            .getElementById('experience')
            .getBoundingClientRect();
        const contact = document
            .getElementById('contact')
            .getBoundingClientRect();
        const h = window.innerHeight;
        const d = 4;
       
        navs[0].classList.remove('header-active');
        navs[1].classList.remove('header-active');
        navs[2].classList.remove('header-active');
        navs[3].classList.remove('header-active');
        if (h / d >= contact.top) {
            navs[3].classList.add('header-active');
        }else if (h / d >= work.top) {
            navs[2].classList.add('header-active');
        }  else if (h / d >= experience.top) {
            navs[1].classList.add('header-active');
        } else if (h / d >= about.top) {
            navs[0].classList.add('header-active');
        }
    });

    return (
        <Navbar expand='md' className='header'>
            <Navbar.Brand href='/v1'>
                <div className='header-nav header-logo'>AI</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav header-nav-toggel' />
            <Navbar.Collapse
                id='basic-navbar-nav'
                className='justify-content-end'
            >
                <Nav.Link href='#about' className={'header-nav '}>
                    About
                </Nav.Link>
                <Nav.Link href='#experience' className={'header-nav '}>
                    Experience
                </Nav.Link>
                <Nav.Link href='#work' className={'header-nav '}>
                    Work
                </Nav.Link>
             
          
            
                <Nav.Link href='#contact' className={'header-nav '}>
                    Contact
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;
