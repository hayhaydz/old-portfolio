import React from 'react';
import { hydrate, render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import SimpleReactLightbox from 'simple-react-lightbox';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(
        <Router>
            <ScrollToTop/>
            <SimpleReactLightbox>
                <App />
            </SimpleReactLightbox>
        </Router>
    , rootElement);
  } else {
    render(
        <Router>
            <ScrollToTop/>
            <SimpleReactLightbox>
                <App />
            </SimpleReactLightbox>
        </Router>
    , rootElement);
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
