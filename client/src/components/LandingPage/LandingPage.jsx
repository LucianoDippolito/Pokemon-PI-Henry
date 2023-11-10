import React from 'react';
import { useDispatch } from 'react-redux' ;
import { Link } from "react-router-dom";
import style from './LandingPage.module.css';

export default function LandingPage(){

    const dispatch = useDispatch();

    return( 
        <div className={style.position}>
            <div style={{display:'flex', flexFlow:'column'}}>
                <img src='images/logo.png'alt="Pokemon" width='450px'/>

                <Link to='/home'>
                    <button className={style.boton}>Home</button> 
                </Link>
                
            </div>
            <img src='images/portada.png'alt="Loading.." width='600px'/>
        </div>
    ) 
}