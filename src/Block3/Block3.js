import React from 'react';
import style from './Block3.module.css'
import messages from './../img/messages.png' ;
import sepBlock3 from './../img/sepBlock3.png' ;


function Block3() {
    return (
        <div className={style.block3}>
            <div className={style.container}>

                <div className={style.text1}>Your message at the right time & place</div>
                <img src={sepBlock3} className={style.sepBlock3}/>

                <div className={style.text2}>Maximize your revenues by broadcasting your great message to potential
                    customers at predefined time & location such as shopping centers , convention centers , airport ect.
                </div>
                <div className={style.text3}>Learn more about LBS…</div>
                <img src={messages} className={style.messages}/>
            </div>
        </div>
    )
}

export default Block3;