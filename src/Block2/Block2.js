import React from 'react';
import style from './Block2.module.css' ;
import sep from './../img/sep.png' ;
import vectorMessage from './../img/vectorMessage.png' ;
import union from './../img/union.png' ;
import locked from './../img/locked.png' ;
import notification from './../img/notification.png' ;
import API from './../img/API.png' ;
import verified from './../img/verified.png' ;
import web from './../img/web.png' ;
import element2 from './../img/element2.png' ;
import element3 from './../img/element3.png' ;
import Kvadrati from "./Kvadrati";

// const ServiceBlock = [
//     {id:1 , img:vectorMessage , title: 'BULK MESSAGING' , text: 'Make each message count as an opportunity for your customers and your business.'  },
//     {id:2 , img:locked , title: 'AUTHENTICATION' , text: 'Keep both your system & User privacy secured by using 2FA\n' +
//             '                        mechanism applied.'  },
//     {id:3 , img:notification , title: 'NOTIFICATION' , text: 'Show your clients you care. Keep your clients updated &\n' +
//             '                        Happy with Real-time notifications.' },
//     {id:4 , img:API , title: 'API' , text: 'Programmatically send and receive SMS in practically every\n' +
//             '                        country.'  },
//     {id:5 , img:verified , title: 'VERIFY' , text: 'User friendly planform that allow you. Submit & track your amazing\n' +
//             '                        campaigns Within seconds.'  },
//     {id:6 , img:web , title: 'WEB SMS' , text: 'User friendly planform that allow you. Submit & track your amazing\n' +
//             '                        campaigns Within seconds.'  }
//]

function Block2() {
    return (
        <div className={style.block2}>
            <div className={style.services}>services</div>
            <div className={style.A2P}>A2P Let the world Know!</div>
            <img src={sep} className={style.sep}/>
            <div className={style.containerBl}>
                {/*<Kvadrati />*/}
                {/*<Kvadrati />*/}
                {/*<Kvadrati />*/}
                {/*<Kvadrati />*/}
                {/*<Kvadrati />*/}
                {/*<Kvadrati />*/}
                <div className={style.bl1}>
                    <div className={style.message}>
                        <img src={vectorMessage} className={style.vectorMessage}/>
                    </div>
                    <div className={style.BulkMessaging}>BULK MESSAGING</div>
                    <div className={style.textBulkMessaging}>Make each message count as an opportunity for your
                        customers and your business.
                    </div>
                    <img src={union} className={style.union1}/>
                </div>

                <div className={style.bl2}>
                    <img src={locked} className={style.locked}/>
                    <div className={style.Authentivation}>AUTHENTICATION</div>
                    <div className={style.textAuthentivation}>Keep both your system & User privacy secured by using 2FA
                        mechanism applied.
                    </div>
                    <img src={union} className={style.union2}/>
                </div>

                <div className={style.bl3}>
                    <img src={notification} className={style.notification}/>
                    <div className={style.Notification}>NOTIFICATION</div>
                    <div className={style.textNotification}>Show your clients you care. Keep your clients updated &
                        Happy with Real-time notifications.
                    </div>
                    <img src={union} className={style.union3}/>
                </div>
                <div className={style.bl4}>
                    <img src={API} className={style.API}/>
                    <div className={style.smsApi}>SMS API</div>
                    <div className={style.textSmsApi}>Programmatically send and receive SMS in practically every
                        country.
                    </div>
                    <img src={union} className={style.union4}/>
                </div>

                <div className={style.bl5}>
                    <img src={verified} className={style.verified}/>
                    <div className={style.verify}>VERIFY</div>
                    <div className={style.textVerify}>Two-factor authentication made simple with an API.</div>
                    <img src={union} className={style.union5}/>
                </div>

                <div className={style.bl6}>
                    <img src={web} className={style.web}/>
                    <div className={style.webSMS}>WEB SMS</div>
                    <div className={style.textWebSMS}>User friendly planform that allow you. Submit & track your amazing
                        campaigns Within seconds.
                    </div>
                    <img src={union} className={style.union6}/>
                </div>
                <img src={element2} className={style.element2}/>
                <img src={element3} className={style.element3}/>
            </div>
        </div>
    )
}

export default Block2;