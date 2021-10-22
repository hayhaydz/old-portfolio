import React from 'react';
import './About.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MeImg from '../../../assets/img/about_me.jpg';
import MeImgLow from '../../../assets/img/about_me_low.jpg';

const About = () => {
    return (
        <div className="About" id="about">
            <h1 className="About__heading">about</h1>
            <div className="About__container">
                <LazyLoadImage
                    wrapperClassName="About__container--imgWrap"
                    className="About__container--img"
                    alt="Me, a spotty 18 year old white male in a green hoodie, with some green trees in the background."
                    src={MeImg}
                    placeholderSrc={MeImgLow}
                    effect="opacity"
                />
                <p className="About__container--text">hi.<br/>i’m haydon a website developer and designer from the south west of england. i enjoy working on anything digital no matter how good or bad i may be at it, from graphic design and illustrations to programming and game design. i have been developing on the web for around 2 years, i’m always learning new things and take pride in never knowing everything. i’m always open to new opportunites and enjoy a challenge. i am currently a student at bath spa university, where i’m studying creative computing (web technologies), hoping to leave with the skillset to start a career in web development. i have a confident amount of knowledge in html, css and javascript. however i have also worked in other languages such as c++, c# and visual basic. as a side interest i enjoy photography and am available if you ever need a photographer. so if you need anything from a website, logo or photoshoot don’t hesitate to get in contact. i look forward to hearing from you.</p>
            </div>
        </div>
    );
};

export default About;