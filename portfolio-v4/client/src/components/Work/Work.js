import React from 'react';
import { Helmet } from 'react-helmet';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Work.scss';

import ImportAssets from '../ImportAssets/ImportAssets';

const Work = props => {
    let workAssets = {};
    workAssets.juniper = ImportAssets(require.context('../../assets/img/workProjects/juniper/', false, /\.(png|jpe?g|svg)$/));
    workAssets.gdb = ImportAssets(require.context('../../assets/img/workProjects/gdb/', false, /\.(png|jpe?g|svg)$/));

    let workSnapshots = [];

    // console.log(workAssets);
    Object.keys(workAssets[props.project]).forEach((key) => {
        if(workAssets[props.project][key].includes('snapshot') && !workAssets[props.project][key].includes('low')) {
            let workSnapshot = {};
            workSnapshot.key = key;
            workSnapshot.data = workAssets[props.project][key];
            workSnapshots.push(workSnapshot);
        }
    });
    const workLogo = workAssets[props.project]['logo.svg'];

    let workNextProject;
    const workNext = {};
    if(props.project === "juniper") {
        workNextProject = "gdb";
        workNext.title = "greenacres dog boarding";
        workNext.link = "/work/gdb";
    } else {
        workNextProject = "juniper";
        workNext.title = "juniper magazine";
        workNext.link = "/work/juniper";
    }
    workNext.thumbnail = workAssets[workNextProject]['thumbnail.jpg'];


    return (
        <div className="Work" id="top" >
            <Helmet>
                <title>Haydon Curteis-Lateo // Web Developer // Web Designer</title>
                <meta property="og:title" content="Haydon Curteis-Lateo // Photographer"/>
                <meta property="og:description"
                    content="Hey! I'm Haydon a web developer and designer from the south west of england, come have a look at my work and let me know what you think!" />
                <meta name="description"
                    content="Hey! I'm Haydon a web developer and designer from the south west of england, come have a look at my work and let me know what you think!" />
            </Helmet>
            <div className="Work_container__left">
                {workSnapshots.map((object, key) => <img src={object.data} className="Work_container__left--img" alt="Shows fullpage design of projects website." key={key} />)}
                <div className="Work_container__left--nextProject">
                    <div className="Work_container__left--nextProject__left">
                        <img src={workNext.thumbnail} className="Work_container__left--nextProject__left--img" alt="Thumbnail of next project"/>
                    </div>
                    <div className="Work_container__left--nextProject__right">
                        <h1 className="Work_container__left--nextProject__right--title">{workNext.title}</h1>
                        <NavLink to={workNext.link} className="Work_container__left--nextProject__right--link">
                            <span>view work</span>
                            <span className="material-icons">arrow_forward</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="Work_container__right">
                <img src={workLogo} className="Work_container__right--logo" alt="Shows projects logo"/>
                <a href={props.link} className="Work_container__right--link" target="_blank" rel="noopener noreferrer">visit site</a>
            </div>
            <NavLink className="Work__topLink" smooth to={`/work/${props.project}#top`} id="topLink"><span className="material-icons">arrow_upward</span></NavLink>
        </div>
    );
};

export default Work;