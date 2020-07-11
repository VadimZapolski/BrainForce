import React from 'react';
import style from './Block4.module.css'
import sepBlock4 from './../img/sepBlock4.png' ;
import pictures from './../img/pictures.png' ;
import Subtract from './../img/Subtract.png' ;


function Block4() {
    return (
        <div className={style.block4}>
            <div className={style.containerText}>
            <span className={style.text1}>MMS multimedia Messaging</span>

            <img src={sepBlock4} className={style.sepBlock4}/>

            <p className={style.text2}>Feature phone is not dead.
            <p className={style.text3}> In contrast to the smartphone market, which
                contracted for the first time in 2018, the feature phone market has continued to grow over the last
                three years. Feature phones sales in 2019 expected as 400 Million and 1 Billion by 2021. Multimedia
                messages support , Images and Video and various types of files It does not required internet connection
                and can cover any device.</p>
            </p>
            <p className={style.text4}>For more multimedia messaging information <span>contact sales.</span></p>
        </div>
            <img src={pictures} className={style.pictures}  />
            <img src={Subtract} className={style.Subtract} />
        </div>
    )
}

export default Block4;