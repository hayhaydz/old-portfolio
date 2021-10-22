import React from 'react';
import { Helmet } from 'react-helmet';
import { NavHashLink as NavLink} from 'react-router-hash-link';
import './NoMatch.scss';

const NoMatch = () => {
    return (
        <div className="NoMatch">
            <Helmet>
                <title>Haydon Curteis-Lateo // 404</title>
                <meta property="og:description"
                    content="Hey! You look like you're lost." />
                <meta name="description"
                    content="Hey! You look like you're lost." />
            </Helmet>
            <div className="NoMatch__container">
                <h3 className="NoMatch__container--heading" >oops. i think you're lost.</h3>
                <NavLink className="NoMatch__container--link" smooth to="/home">click here to find your way back</NavLink>
            </div>
        </div>
    )
}

export default NoMatch;