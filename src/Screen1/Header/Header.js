import React from 'react';
import style from './Header.module.css' ;
import logo from '../../img/logo.png' ;

function Header() {
    return (
            <div className={style.header}>
                <div className={style.headerContainer}>
                    <img src={logo} className={style.logo}/>
                    <div className={style.nav}>
                        <div className={style.navItems}>
                            <a className={style.navItem}>Home</a>
                            <a className={style.navItem}>Services</a>
                            <a className={style.navItem}>Coverage</a>
                            <a className={style.navItem}>About Us</a>
                            <a className={style.navItem}>Contact Us</a>
                        </div>
                        <div className={style.logIn}>
                            <a className={style.logItem}>Log In</a>
                            <a className={style.logItem}>TH</a>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Header;