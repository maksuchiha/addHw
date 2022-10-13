import React from 'react'
import s from './Message.module.css'


type PropsType = {
    data: {
        avatar: string
        name: string
        message: string
        time: string
    }
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div className={s.message__img}>
                <img src={props.data.avatar} alt=""/>
            </div>
            <div className={s.messageItem}>
                <div className={s.messageItem__info}>
                    <div className={s.messageItem__name}>{props.data.name}</div>
                    <div className={s.messageItem__message}>{props.data.message}</div>
                </div>
                <div className={s.messageItem__time}>
                    {props.data.time}
                </div>
            </div>
        </div>
    )
}

export default Message
