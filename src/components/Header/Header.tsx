import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"}
                alt={""}/>
        </header>
    );
}

export default Header;