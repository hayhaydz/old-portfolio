import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Landing.scss';

const Landing = () => {
    return (
        <div className="Landing">
            <div className="Landing__container">
                <h1 className="Landing__container--tagline">i make digital stuff.</h1>
                <NavLink className="Landing__container--scroll" smooth to="/home#work">scroll.</NavLink>
            </div>
        </div>
    );
};

export default Landing;