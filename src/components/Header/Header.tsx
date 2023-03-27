import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    auth: AuthType
}

const Header = (props: HeaderPropsType) => {
    return(
        <header className={styles.header}>
            <div>
                <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"}
                alt={""}/>
            </div>
            <div className={styles.loginBlock}>
                {props.auth.isAuth ? props.auth.login :
                <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;