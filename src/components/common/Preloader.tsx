import React from 'react';
import preloader from "../../assets/images/Spinner-1s-200px.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={''}/>
        </div>
    );
};