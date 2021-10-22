import React from 'react';
import './WorkPart.scss';
import WorkPiece from './WorkPiece/WorkPiece';
import JuniperImg from '../../../assets/img/workProjects/juniper/thumbnail.jpg';
import JuniperImgLow from '../../../assets/img/workProjects/juniper/thumbnail_low.jpg';
import GDBImg from '../../../assets/img/workProjects/gdb/thumbnail.jpg';
import GDBImgLow from '../../../assets/img/workProjects/gdb/thumbnail_low.jpg';

const Work = () => {
    let data = [
        {
            title: "juniper magazine",
            link: "/work/juniper",
            number: "1",
            image: {
                src: JuniperImg,
                placeholderSrc: JuniperImgLow,
                alt: "Lady perched in train station platform with Costa drink in hands.",

            }
        },
        {
            title: "greenacres dog boarding",
            link: "/work/gdb",
            number: "2",
            image: {
                src: GDBImg,
                placeholderSrc: GDBImgLow,
                alt: "Illustration of lush green hills with bright blue sky. Along with greenacres dog boarding logo, that displays the name in a playful fun font.",
            }
        }
    ];

    return (
        <div className="WorkPart" id="work">
            <h1 className="WorkPart__heading">work</h1>
            {data.map((object, key) => <WorkPiece key={key} data={object} />)}
        </div>
    );
};

export default Work;