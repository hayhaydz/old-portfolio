import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Photography.scss';
import { SRLWrapper } from 'simple-react-lightbox';
import Masonry from 'react-masonry-css';

class Photography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photographyAssets: {
                full: [],
                thumbnail: []
            },
            currentSlide: {}
        };
    }

    componentDidMount() {
        axios
            .get('api/photography')
            .then((res) => {
                let photographyAssetsC = this.state.photographyAssets;
                res.data.Contents.reverse();
                for (let i = 0; i < res.data.Contents.length; i++) {
                    if(res.data.Contents[i].Size > 0) {
                        if(res.data.Contents[i].Key.includes('full')) {
                            photographyAssetsC.full.push(res.data.Contents[i].Key);
                        } else if (res.data.Contents[i].Key.includes('thumbnail')) {
                            photographyAssetsC.thumbnail.push(res.data.Contents[i].Key);
                        }
                    }
                }

                this.setState({photographyAssets: photographyAssetsC});
            })
            .catch((error) => {
                console.log('Error: ' + error);
            });
    }

    componentDidUpdate() {
        const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

        if(isChrome) {
            let downloadButton = document.getElementsByClassName('SRLDownloadButton')[0];
            if(downloadButton !== undefined) {
                let source = this.state.currentSlide.source;
                downloadButton.onclick = () => {
                    window.open(source, '_blank');
                };
            }
        }
    }

    render() {
        const SRLOptions = {
            settings: {
                overlayColor: "rgb(255, 255, 255, 0.95)"
            },
            buttons: {
                showAutoplayButton: false,
                showNextButton: false,
                showPrevButton: false,
                showThumbnailsButton: false,
                // showDownloadButton: false
            },
            caption: {
                showCaption: false
            },
            thumbnails: {
                showThumbnails: false
            }
        };
    
        const masonryBreakpoints = {
            default: 3,
            700: 2,
            500: 1
        };
    
        if ('onorientationchange' in window) {
            window.addEventListener("orientationchange", function() {
                window.location.reload();
            }, false);
        }

        const callbacks = {
            onLightboxOpened: object => this.setState({currentSlide: object.currentSlide})
        }
    
        return (
            <div className="Photography" id="top">
                <Helmet>
                    <title>Haydon Curteis-Lateo // Photographer</title>
                    <meta property="og:description"
                        content="Hey! I'm Haydon an amatuer photographer from the south west of england. I enjoy street photography most but explore all areas. Take a look at my work and let me know what you think!" />
                    <meta name="description"
                        content="Hey! I'm Haydon an amatuer photographer from the south west of england. I enjoy street photography most but explore all areas. Take a look at my work and let me know what you think!" />
                </Helmet>
                <h1 className="Photography__heading" >photography</h1>
                <div className="Photography__gallery">
                    <SRLWrapper options={SRLOptions} callbacks={callbacks}>
                        <Masonry
                            breakpointCols={masonryBreakpoints}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {this.state.photographyAssets.full.map((object, key) => {return <a href={`https://hayhaydz-photography.s3.eu-west-2.amazonaws.com/${object}`} className="Photography__gallery--link" data-attribute="SRL" key={key}><img src={`https://hayhaydz-photography.s3.eu-west-2.amazonaws.com/${this.state.photographyAssets.thumbnail[key]}`} className="Photography__gallery--img" alt="Shows an item from my gallery" /></a>})}
                        </Masonry>
                    </SRLWrapper>
                </div>
                <NavLink className="Photography__topLink" smooth to="/photography#top" id="topLink"><span className="material-icons">arrow_upward</span></NavLink>
            </div>
        )
    }
};

export default Photography;