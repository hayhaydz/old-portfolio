import React, { useEffect, useState } from 'react';
import './App.scss';import { 
  Route, 
  Switch,
  Redirect
} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Header from './Header/Header';
import Menu from './Menu/Menu';

// Pages
import Home from '../Home/Home';
import Work from '../Work/Work';
import NoMatch from '../NoMatch/NoMatch';
import Photography from '../Photography/Photography';

// Assets
import SwirlsImg from '../../assets/img/swirls.jpg';
import SwirlsImgLow from '../../assets/img/swirls_low.jpg';

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let sideSheet = document.getElementsByClassName('App__sideSheet')[0];
    let url = window.location.pathname.split('/');
  
    if(url[1] === "work") {
      sideSheet.style.width = "40%";
    } else if(url[1] !== "work" && sideSheet.style.width === '40%') {
      sideSheet.style.width = "50%";
    }

    let preLoaderContainer = document.getElementById('preLoaderContainer');
    let preLoaderBar = document.getElementById('preLoaderBar');
    let root = document.getElementById("root");
    let body = document.body;
    setTimeout(() => {
      preLoaderBar.style.opacity = 0;
      preLoaderContainer.style.opacity = 0;
      setTimeout(() => {
        body.classList.remove('preLoader');
        setTimeout(() => {
          root.style.opacity = 1;
        }, 200);
      }, 500);
    }, 2000);
  });

  return (
    <div className="App" id="top">
      <div>
        <Menu open={open} setOpen={setOpen}/>
        <Header open={open} setOpen={setOpen}/>
      </div>
      <Switch>
        <Route exact path='/' >
          <Redirect to="/home" />
        </Route>
        <Route exact path='/home' >
          <Home />
        </Route>
        <Route exact path='/work' >
          <Redirect to="/home" />
        </Route>
        <Route exact path='/work/juniper' >
          <Work project="juniper" link="https://juniper-magazine.ga/" />
        </Route>
        <Route exact path='/work/gdb' >
          <Work project="gdb" link="https://www.doghomecare.co.uk/" />
        </Route>
        <Route exact path='/photography' >
          <Photography />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
      <LazyLoadImage
          wrapperClassName="App__sideSheet"
          className="App__sideSheet--img"
          alt="Paint marbling texture. A swirly visual black and white liquid effect."
          src={SwirlsImg}
          placeholderSrc={SwirlsImgLow}
      />
    </div>
  );
};

export default App;
