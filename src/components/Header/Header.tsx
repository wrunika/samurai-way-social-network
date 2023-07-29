import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";
import socialNetwork from "./../../assets/images/hedgehog.png";

type HeaderPropsType = {
    auth: AuthType
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                src={socialNetwork}
                alt={""}/>
                Hedge<span className={styles.logoColor}>Hog</span>
            </div>
            <div className={styles.loginBlock}>
                {props.auth.isAuth
                    ? <div>{props.auth.login} - <button className={styles.logoutBtn} onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;