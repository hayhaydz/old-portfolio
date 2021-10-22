import React from 'react';
import './WorkPiece.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WorkPiece = props => {
    return (
        <div className="WorkPiece">
            <h3 className="WorkPiece__number">{props.data.number}</h3>
            <LazyLoadImage 
                wrapperClassName="WorkPiece__imgWrap"
                className="WorkPiece__img"
                src={props.data.image.src}
                placeholderSrc={props.data.image.placeholderSrc}
                alt={props.data.image.alt}
                effect="opacity"
            />
            <div className="WorkPiece__aside">
                <a href={props.data.link} className="WorkPiece__aside--link">view more</a>
                <h2 className="WorkPiece__aside--title">{props.data.title}</h2>
            </div>
        </div>
    )
}

export default WorkPiece;