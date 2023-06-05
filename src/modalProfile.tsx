import { useState } from "react";
import "./App.scss";
import axios from "axios";
import { test } from "./location";
function ModalsProfile({
  active,
  setActive,
  setNameOfUser,
}: {
  active: boolean;
  setActive: Function;
  setNameOfUser: (name: string) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkCode, setCheckCode] = useState(false);
  const [code, setCode] = useState("");

  const handleFormSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const body = {
        jsonrpc: "2.0",
        id: "1234567890",
        method: "User.register",
        params: {
          name: name,
          phoneNumber: phone,
        },
      };
      const response = await axios.post("http://localhost:7000", body);
      let data = "";
      if (response) {
        data = response.data.result.code;
        setCheckCode(true);
        alert(`Ваш код ${data}`);
      }
    } catch (e: any) {
      const error = e.response.data.error.message;
      alert(error);
    }
  };

  return (
    <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
      <div className={checkCode ? "byCode active" : "byCode"} onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const body = {
              jsonrpc: "2.0",
              id: "1234567890",
              method: "User.register",
              params: {
                name: name,
                phoneNumber: phone,
                code: code,
              },
            };
            try {
              const response = await axios.post("http://localhost:7000", body);
              const data = response.data.result;
              window.localStorage.setItem("user", JSON.stringify(data));
              setNameOfUser(data.name);
              setActive(false);
              setCheckCode(false);
            } catch (e: any) {
              const error2 = e.response.data.error.message;
              alert(error2);
            }
          }}
        >
          <input type="text" value={code} onChange={(e) => setCode(e.currentTarget.value)} placeholder="Введите код" />
          <button type="submit">Отправить код</button>
        </form>
      </div>
      <div className={checkCode ? "byPhone active" : "byPhone"} onClick={(e) => e.stopPropagation()}>
        <button className="btnX" onClick={() => setActive(false)}>
          X
        </button>
        <h3>Введите номер телефона</h3>
        <p>Отправим смс с кодом подтверждения</p>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder="Введите имя" />
          <input
            type="text"
            onChange={(e) => setPhone(e.currentTarget.value)}
            value={phone}
            placeholder="Введите номер телефона"
          />
          <button type="submit">Получить код</button>
        </form>
      </div>
      <div className={checkCode ? "byLogin active" : "byLogin"} onClick={(e) => e.stopPropagation()}>
        <button className="btnX" onClick={() => setActive(false)}>
          X
        </button>
        <h3>Войти по паролю</h3>
        <form action="">
          <input type="text" placeholder="Введите имя" />
          <input type="text" placeholder="Логин" />
          <input type="password" placeholder="Пароль" />
          <button>Регистрироваться</button>
        </form>
      </div>
    </div>
  );
}
export default ModalsProfile;
