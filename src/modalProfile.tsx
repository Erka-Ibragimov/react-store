import "./App.scss";
function modalsProfile({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Function;
}) {
  return (
    <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
      <div className="byPhone" onClick={e=>e.stopPropagation()}>
        <button className="btnX" onClick={() => setActive(false)}>X</button>
        <h3>Введите номер телефона</h3>
        <p>Отправим смс с кодом подтверждения</p>
        <form action="">
          <input type="text" placeholder="Введите имя" />
          <input type="text" placeholder="Введите номер телефона" />
          <button>Получить код</button>
        </form>
      </div>
      <div className="byLogin" onClick={e=>e.stopPropagation()}>
        <button className="btnX" onClick={() => setActive(false)}>X</button>
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
export default modalsProfile;
