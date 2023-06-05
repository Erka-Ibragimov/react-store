import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import top1sold from "./images/top-sold-1.svg";
import top2sold from "./images/top-sold-2.svg";
import top3sold from "./images/top-sold-3.svg";
import top4sold from "./images/top-sold-4.svg";
import { useState } from "react";

export const TopSold = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [hasLike, setHasLike] = useState([
    {
      id: 1,
      img: top1sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 2,
      img: top2sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 3,
      img: top3sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 4,
      img: top4sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 5,
      img: top3sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 6,
      img: top4sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "35 990 ₽",
      activeLike: false,
      activeBasket: false,
    },
  ]);

  return (
    <div className="TopSold">
      <h1>Хиты продаж</h1>
      <Slider {...settings}>
        {hasLike.map((el) => {
          return (
            <div className="topOneSlide" key={el.id}>
              <img src={el.img} alt="" />
              <div className="buttons">
                <button
                  onClick={() => {
                    if (el.activeLike) {
                      el.activeLike = false;
                    } else {
                      el.activeLike = true;
                    }
                    setHasLike([...hasLike]);
                  }}
                  className={el.activeLike ? "isLike" : ""}
                >
                  <FiHeart />
                </button>
                <button
                  onClick={() => {
                    if (el.activeBasket) {
                      el.activeBasket = false;
                    } else {
                      el.activeBasket = true;
                    }
                    setHasLike([...hasLike]);
                  }}
                  className={el.activeBasket ? "isBasket" : ""}
                >
                  <FiShoppingCart />
                </button>
              </div>
              <h3>{el.title}</h3>
              <p>{el.price}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
