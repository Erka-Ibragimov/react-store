import React from "react";
import local from './images/Location.svg';
import message from './images/Message.svg'
import './App.scss';


export const Location = ()=>{
    return (
        <div className='Location'>
            <h4>abilmebel - интернет магазин качественной мебели</h4>
            <div className="locationAndMessage">
                <a href="Нукус"><img src={local}/>Нукус</a>
                <a href="abil@gmail.com"><img src={message}/>abil@gmail.com</a>
            </div>
        </div>
    )
}