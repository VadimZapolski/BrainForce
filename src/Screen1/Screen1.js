import React from 'react';
import style from './Screen1.module.css' ;
import Header from "../Header/Header";
import ButtonContactSales from "./ButtonContactSales/ButtonContactSales";


function Screen1() {
    return (
        <div className={style.screen1}>
            <Header/>
            <div className={style.container}>
                <div className={style.content}>
                    <h1 className={style.title}>Messaging & More</h1>
                    <p className={style.description}>Let the world know!
                        <span> Broadcast your message within seconds using MailBIT API:</span>
                    </p>
                    <ButtonContactSales  />
                </div>
            </div>
        </div>


    )
}

export default Screen1;