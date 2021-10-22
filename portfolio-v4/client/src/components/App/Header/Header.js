import React, { useEffect } from 'react';
import './Header.scss';

const Header = ({open, setOpen}) => {
    let globalVisible = true;
    let prevScrollPos = Math.round(window.pageYOffset);

    useEffect(() => {
        let hamburger = document.getElementById('hamburger');
        if(open) {
            hamburger.classList.remove('header__hamburger--open');
            hamburger.classList.add('header__hamburger--close');
        } else {
            hamburger.classList.add('header__hamburger--open');
            hamburger.classList.remove('header__hamburger--close');
        }

        window.addEventListener("scroll", throttle(handleScroll, 200));
    });

    const throttle = (fn, wait) => {
        var time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        };
      };
      

    const handleScroll = () => {
        let url = window.location.pathname.split('/')[1];
        let topLink;
        let topLinkBool = false;
        if(!topLinkBool && url === "photography") {
            topLink = document.getElementById('topLink');
            topLinkBool = true;
        }
        if(!topLinkBool && url === "work") {
            topLink = document.getElementById('topLink');
            topLinkBool = true;
        }
        const header = document.getElementById('header');
        const currentScrollPos = Math.round(window.pageYOffset);

        if(currentScrollPos < prevScrollPos && !globalVisible) {
            header.classList.remove('header--hidden');
            if(topLinkBool && currentScrollPos > 150) {
                topLink.style.display = "block";
                setTimeout(() => {
                    topLink.classList.add('Photography__topLink--visible');
                }, 200);
            }
            globalVisible = true;
        } else if(currentScrollPos > prevScrollPos && globalVisible === true) {
            header.classList.add('header--hidden');
            if(topLinkBool) {
                topLink.classList.remove('Photography__topLink--visible');
                setTimeout(() => {
                    topLink.style.display = "none";
                }, 200);
            }
            globalVisible = false;
        }

        if(!globalVisible && currentScrollPos < 150) {
            header.classList.remove('header--hidden');
            globalVisible = true;
        }

        if(topLinkBool && currentScrollPos < 150) {
            topLink.classList.remove('Photography__topLink--visible');
            setTimeout(() => {
                topLink.style.display = "none";
            }, 200);
        }

        prevScrollPos = currentScrollPos;
    };


    return (
        <header className="header" id="header">
            <div className="header__hamburger header__hamburger--open" onClick={() => setOpen(!open)} id="hamburger"><span></span></div>
            <div className="header__logo"><h1>haydon curteis-lateo.</h1></div>
            <div className="header__social">
                <a href="https://www.behance.net/hayhaydz" target="_blank" rel="noopener noreferrer">
                <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Behance</title>
                    <path 
                    d="M24.7656 11.496H32.5586V13.3866H24.7656V11.496ZM16.957 18.9765C18.6797 18.1522 19.582 16.8983 19.582 14.9608C19.582 11.1288 16.7305 10.1991 13.4375 10.1991H4.375V29.4335H13.6914C17.1836 29.4335 20.4609 27.7538 20.4609 23.8476C20.4609 21.4335 19.3203 19.6483 16.957 18.9765ZM8.60156 13.4804H12.5664C14.0938 13.4804 15.4648 13.9061 15.4648 15.6796C15.4648 17.3124 14.3984 17.9686 12.8867 17.9686H8.60156V13.4804ZM13.1133 26.1679H8.59766V20.871H13.2031C15.0625 20.871 16.2383 21.6483 16.2383 23.6171C16.2383 25.5546 14.8359 26.1679 13.1133 26.1679ZM35.6055 22.6718C35.6055 18.5507 33.1953 15.1171 28.8359 15.1171C24.5977 15.1171 21.7148 18.3085 21.7148 22.4921C21.7148 26.828 24.4453 29.8046 28.8359 29.8046C32.1602 29.8046 34.3125 28.3085 35.3477 25.1171H31.9766C31.6094 26.3085 30.1172 26.9335 28.957 26.9335C26.7148 26.9335 25.543 25.621 25.543 23.3905H35.5781C35.5898 23.1601 35.6055 22.9179 35.6055 22.6718ZM25.543 20.9765C25.6641 19.1444 26.8867 17.9999 28.7148 17.9999C30.6367 17.9999 31.5977 19.1288 31.7656 20.9765H25.543Z" 
                    fill="#101010"
                    strokeLinecap="round"
                    />
                </svg>
                </a>
                <a href="https://www.instagram.com/hayhaydz/" target="_blank" rel="noopener noreferrer">
                <title>Instagram</title>
                <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                    d="M20.0001 11.9885C15.5665 11.9885 11.9883 15.5667 11.9883 20.0002C11.9883 24.4338 15.5665 28.012 20.0001 28.012C24.4337 28.012 28.0118 24.4338 28.0118 20.0002C28.0118 15.5667 24.4337 11.9885 20.0001 11.9885ZM20.0001 25.2073C17.1329 25.2073 14.793 22.8674 14.793 20.0002C14.793 17.1331 17.1329 14.7932 20.0001 14.7932C22.8673 14.7932 25.2071 17.1331 25.2071 20.0002C25.2071 22.8674 22.8673 25.2073 20.0001 25.2073ZM28.3399 9.79322C27.3048 9.79322 26.4688 10.6292 26.4688 11.6643C26.4688 12.6995 27.3048 13.5354 28.3399 13.5354C29.3751 13.5354 30.211 12.7034 30.211 11.6643C30.2113 11.4185 30.1631 11.1751 30.0692 10.9479C29.9753 10.7208 29.8375 10.5144 29.6637 10.3406C29.4899 10.1668 29.2835 10.0289 29.0563 9.93502C28.8292 9.8411 28.5857 9.79291 28.3399 9.79322ZM35.6173 20.0002C35.6173 17.844 35.6368 15.7073 35.5157 13.5549C35.3946 11.0549 34.8243 8.83619 32.9962 7.00806C31.1641 5.17603 28.9493 4.60963 26.4493 4.48853C24.293 4.36744 22.1563 4.38697 20.004 4.38697C17.8477 4.38697 15.711 4.36744 13.5587 4.48853C11.0587 4.60963 8.83991 5.17994 7.01178 7.00806C5.17975 8.84009 4.61334 11.0549 4.49225 13.5549C4.37116 15.7112 4.39069 17.8479 4.39069 20.0002C4.39069 22.1526 4.37116 24.2932 4.49225 26.4456C4.61334 28.9456 5.18366 31.1643 7.01178 32.9924C8.84381 34.8245 11.0587 35.3909 13.5587 35.512C15.7149 35.6331 17.8516 35.6135 20.004 35.6135C22.1602 35.6135 24.2969 35.6331 26.4493 35.512C28.9493 35.3909 31.168 34.8206 32.9962 32.9924C34.8282 31.1604 35.3946 28.9456 35.5157 26.4456C35.6407 24.2932 35.6173 22.1565 35.6173 20.0002ZM32.1798 29.2112C31.8946 29.9221 31.5508 30.4534 31.0001 31.0002C30.4493 31.551 29.9219 31.8948 29.211 32.1799C27.1563 32.9963 22.2774 32.8127 20.0001 32.8127C17.7227 32.8127 12.8399 32.9963 10.7852 32.1838C10.0743 31.8987 9.54303 31.5549 8.99616 31.0042C8.44538 30.4534 8.10163 29.926 7.81647 29.2151C7.00397 27.1565 7.18756 22.2776 7.18756 20.0002C7.18756 17.7229 7.00397 12.8401 7.81647 10.7854C8.10163 10.0745 8.44538 9.54322 8.99616 8.99634C9.54694 8.44947 10.0743 8.10181 10.7852 7.81666C12.8399 7.00416 17.7227 7.18775 20.0001 7.18775C22.2774 7.18775 27.1602 7.00416 29.2149 7.81666C29.9258 8.10181 30.4571 8.44556 31.004 8.99634C31.5548 9.54713 31.8985 10.0745 32.1837 10.7854C32.9962 12.8401 32.8126 17.7229 32.8126 20.0002C32.8126 22.2776 32.9962 27.1565 32.1798 29.2112Z" 
                    fill="#101010"
                    strokeLinecap="round"
                    />
                </svg>
                </a>
                <a href="https://github.com/hayhaydz" target="_blank" rel="noopener noreferrer">
                <title>Github</title>
                <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                    d="M19.9844 2.98043C10.3242 2.97652 2.5 10.7968 2.5 20.4492C2.5 28.082 7.39453 34.5703 14.2109 36.9531C15.1289 37.1836 14.9883 36.5312 14.9883 36.0859V33.0586C9.6875 33.6796 9.47266 30.1718 9.11719 29.5859C8.39844 28.3593 6.69922 28.0468 7.20703 27.4609C8.41406 26.8398 9.64453 27.6171 11.0703 29.7226C12.1016 31.25 14.1133 30.9921 15.1328 30.7382C15.3555 29.8203 15.832 29 16.4883 28.3632C10.9961 27.3789 8.70703 24.0273 8.70703 20.0429C8.70703 18.1093 9.34375 16.332 10.5938 14.8984C9.79688 12.5351 10.668 10.5117 10.7852 10.2109C13.0547 10.0078 15.4141 11.8359 15.5977 11.9804C16.8867 11.6328 18.3594 11.4492 20.0078 11.4492C21.6641 11.4492 23.1406 11.6406 24.4414 11.9921C24.8828 11.6562 27.0703 10.0859 29.1797 10.2773C29.293 10.5781 30.1445 12.5546 29.3945 14.8867C30.6602 16.3242 31.3047 18.1171 31.3047 20.0546C31.3047 24.0468 29 27.4023 23.4922 28.3711C23.9639 28.835 24.3385 29.3883 24.5941 29.9986C24.8496 30.6089 24.981 31.2641 24.9805 31.9257V36.3203C25.0117 36.6718 24.9805 37.0195 25.5664 37.0195C32.4844 34.6875 37.4648 28.1523 37.4648 20.4531C37.4648 10.7968 29.6367 2.98043 19.9844 2.98043Z" 
                    fill="#101010"
                    strokeLinecap="round"
                    />
                </svg>
                </a>
            </div>
        </header>
    );
};

export default Header;