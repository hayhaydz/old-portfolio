import React from 'react';
import './Contact.scss';

const contact = () => {
    return (
        <div className="Contact" id="contact">
            <h1 className="Contact__heading">contact</h1>
            <div className="Contact__container">
                <p className="Contact__container--email">haydon.curteis-lateo@outlook.com</p>
                <a href="mailto:haydon.curteis-lateo@outlook.com" className="Contact__container--link" target="_blank" rel="noopener noreferrer">email</a>
            </div>
        </div>
    )
}

export default contact;