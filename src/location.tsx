import React, { useState } from "react";
import local from "./images/Location.svg";
import message from "./images/Message.svg";
import "./App.scss";

export let test: any;
export const Location = ({ nameOfUser }: { nameOfUser: string }) => {
  return (
    <div className="Location">
      <h4>abilmebel - интернет магазин качественной мебели</h4>
      <h1 className={nameOfUser ? "NameLocation active" : "NameLocation"}>Добро пожаловать {nameOfUser}</h1>
      <div className="locationAndMessage">
        <a href="Нукус">
          <img src={local} />
          Нукус
        </a>
        <a href="abil@gmail.com">
          <img src={message} />
          abil@gmail.com
        </a>
      </div>
    </div>
  );
};
