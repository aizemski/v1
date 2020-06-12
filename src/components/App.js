import React from 'react';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';

function App() {
    return (
        <>
            <Header />
            <Content>
                <About />
                <Work />
                <Experience />
                <Contact />
            </Content>
            <Footer />
        </>
    );
}

export default App;
