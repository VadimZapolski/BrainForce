import React from 'react';
import style from "./Kvadrati.module.css";
import vectorMessage from "../img/vectorMessage.png";
import union from "../img/union.png";


function Kvadrati() {
return (
    <div className={style.bl1}>
        <img src={vectorMessage} className={style.vectorMessage}/>
        <img src={union} className={style.union1}/>
        <div className={style.BulkMessaging}>BULK MESSAGING</div>
        <div className={style.textBulkMessaging}>Make each message count as an opportunity for your
            customers and your business.
        </div>
    </div>
)
}

export default Kvadrati;




