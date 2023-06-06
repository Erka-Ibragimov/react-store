import React, { useState } from "react";
import local from "./images/Location.svg";
import message from "./images/Message.svg";
import axios from "axios";
import "./App.scss";

export let test: any;
export const Location = ({
  nameOfUser,
  image,
  setImage,
}: {
  nameOfUser: string;
  image: string | null;
  setImage: (name: string) => void;
}) => {
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      const user = JSON.parse(window.localStorage.getItem("user")!);
      const body = {
        jsonrpc: "2.0",
        id: "1234567890",
        method: "User.setAvatar",
        params: {
          newPhoto: base64Image,
        },
      };
      const response = await axios.post("http://localhost:7000", body, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setImage(response.data.result.photoPath);
    };
  };
  return (
    <div className="Location">
      <h4>abilmebel - интернет магазин качественной мебели</h4>
      <h1 className={nameOfUser ? "NameLocation active" : "NameLocation"}>
        Добро пожаловать {nameOfUser}
      </h1>
      <img
        className={image ? "userImg active" : "userImg"}
        src={image ? `http://localhost:7000/${image}` : ""}
        alt=""
      />
      <input
        className={nameOfUser ? "setImage active" : "setImage"}
        type="file"
        onChange={handleFileUpload}
      />
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
