import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import userNavbar from "./../../assets/images/profile.png";
import usersNavbar from "./../../assets/images/users.png";
import messagesNavbar from "./../../assets/images/messages.png";
import newsNavbar from "./../../assets/images/news.png";
import settingsNavbar from "./../../assets/images/settings.png";
import musicNavbar from "./../../assets/images/music.png";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    {/*<img alt={'icon'} className={styles.icon} src={userNavbar} />*/}
                    <NavLink to="/profile" activeClassName={styles.activeLink}>
                        <img alt={'icon'} className={styles.icon} src={userNavbar} />
                            <span>Profile</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    {/*<img alt={'icon'} className={styles.icon} src={messagesNavbar} />*/}
                    <NavLink to="/dialogs" activeClassName={styles.activeLink}>
                        <img alt={'icon'} className={styles.icon} src={messagesNavbar} />
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    {/*<img alt={'icon'} className={styles.icon} src={usersNavbar} />*/}
                    <NavLink to="/users" activeClassName={styles.activeLink}>
                        <img alt={'icon'} className={styles.icon} src={usersNavbar} />
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    {/*<img alt={'icon'} className={styles.icon} src={newsNavbar} />*/}
                    <NavLink to="/news" activeClassName={styles.activeLink}>
                        <img alt={'icon'} className={styles.icon} src={newsNavbar} />
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    {/*<img alt={'icon'} className={styles.icon} src={musicNavbar} />*/}
                    <NavLink to="/music" activeClassName={styles.activeLink}>
                        <img alt={'icon'} className={styles.icon} src={musicNavbar} />
                        <span>Music</span>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    {/*<img alt={'icon'} className={styles.icon} src={settingsNavbar} />*/}
                    <NavLink to="/settings" activeClassName={styles.activeLink}>
                        <img alt={'icon'} className={styles.icon} src={settingsNavbar} />
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;