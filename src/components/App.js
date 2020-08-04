import React from 'react';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
import Welcome from './Welcome';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Welcome />
            <About />
            <Experience />
            <Work />
           
            <Content>
                <Contact />
            </Content>
            <Footer />
        </React.Fragment>
    );
}

export default App;
