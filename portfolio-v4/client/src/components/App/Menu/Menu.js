import React, { useEffect }from 'react';
import { NavHashLink as NavLink} from 'react-router-hash-link';
import './Menu.scss';

const Menu = ({open, setOpen}) => {
    useEffect(() => {
        let menu = document.getElementById('menu');
        if(open) {
            menu.style.display = "flex";
            setTimeout(() => {
                menu.style.opacity = 1;
            }, 200);
        } else {
            menu.style.opacity = 0;
            setTimeout(() => {
                menu.style.display = "none";
            }, 200);
        }
    });

    return (
        <div className="Menu" id="menu">
            <nav className="Menu__nav">
                <NavLink className="Menu__nav--link" smooth to="/home#top" onClick={() => setOpen(!open)}>home</NavLink>
                <NavLink className="Menu__nav--link" smooth to="/home#work" onClick={() => setOpen(!open)}>work</NavLink>
                <NavLink className="Menu__nav--link" smooth to="/home#about" onClick={() => setOpen(!open)}>about</NavLink>
                <NavLink className="Menu__nav--link" smooth to="/home#contact" onClick={() => setOpen(!open)}>contact</NavLink>
                <NavLink className="Menu__nav--link" activeClassName="Menu__nav--link-active" to="/photography" onClick={() => setOpen(!open)}>photography</NavLink>
            </nav>
        </div>
    )
};

export default Menu;