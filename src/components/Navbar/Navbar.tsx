import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import userNavbar from "./../../assets/images/user-navbar.png";
import usersNavbar from "./../../assets/images/users-navbar.png";
import messagesNavbar from "./../../assets/images/messages-navbar.png";
import newsNavbar from "./../../assets/images/news-navbar.png";
import settingsNavbar from "./../../assets/images/settings-navbar.png";
import musicNavbar from "./../../assets/images/music-navbar.png";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <img alt={'icon'} className={styles.icon} src={userNavbar} />
                    <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <img alt={'icon'} className={styles.icon} src={messagesNavbar} />
                    <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <img alt={'icon'} className={styles.icon} src={usersNavbar} />
                    <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
                </li>
                <li className={styles.item}>
                    <img alt={'icon'} className={styles.icon} src={newsNavbar} />
                    <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <img alt={'icon'} className={styles.icon} src={musicNavbar} />
                    <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <img alt={'icon'} className={styles.icon} src={settingsNavbar} />
                    <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;