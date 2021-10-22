import React from 'react';
import './Home.scss';

// Home page parts
import Landing from './Landing/Landing';
import WorkPart from './WorkPart/WorkPart';
import About from './About/About';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className="Home">
            <Landing/>
            <WorkPart/>
            <About/>
            <Contact/>
        </div>
    )
};

export default Home;