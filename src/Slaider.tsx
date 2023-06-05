import cuid from "cuid";
import chair from "./images/bg-1.jpg";
import divan from "./images/PhotoRoom_20211017_061904-1000x1000-1000x1000.png";
import table from "./images/67171.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Slaider = () => {
  const [data, setData] = useState<
    { id: string; title: string; text: string; img: string; discount: string }[]
  >([
    {
      id: cuid(),
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      img: chair,
      discount: "45% Скидка",
    },
    {
      id: cuid(),
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      img: divan,
      discount: "25% Скидка",
    },
    {
      id: cuid(),
      title: "Финальная распродажа",
      text: "Только 30 моделей можно забрать домой со скидкой до 45%",
      img: table,
      discount: "10% Скидка",
    },
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(
      () => setIndex((prevState) => prevState + 1),
      5000
    );
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="Slider">
      <div className="wrapSlider">
        {data.map((item, itemIndex) => {
          const { id, title, text, img, discount } = item;
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className={`${position} slideOne`} key={id}>
              <div className="textBlockSlider">
                <h1>{title}</h1>
                <p>{text}</p>
                <button>Подробнее</button>
              </div>
              <div className="imgBlockSlider">
                <img src={img} alt="" />
                <h2>{discount}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="prev"
        onClick={() => setIndex((prevState) => prevState - 1)}
      >
        <FaArrowLeft />
      </button>
      <button
        className="next"
        onClick={() => setIndex((prevState) => prevState + 1)}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
