import cuid from "cuid";

export const Slaider = () => {
  const dataOfSlider = [
    {
      id: cuid(),
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      img: "a",
    },
    {
      id: cuid(),
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      img: "a",
    },
  ];
  const btnNext = () => {
    
  };
  return (
    <div className="Slider">
      <button onClick={btnNext}>Next</button>
      <button>Prev</button>
      <div className="oneSlider">
        <div>
          <h1>{dataOfSlider[0].title}</h1>
          <p>{dataOfSlider[0].text}</p>
          <button>Подробнее</button>
        </div>
        <div>
          <img src="" alt="" />
          <p>45% СКИДКА</p>
        </div>
      </div>
    </div>
  );
};
