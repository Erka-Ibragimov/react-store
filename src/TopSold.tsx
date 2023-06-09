import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { CatchError } from "./errorHandler/catchError";

export const TopSold = ({
  count,
  setCount,
  hasLike,
  setHasLike,
  likeItem,
  setLikeItem,
}: {
  count: number;
  setCount: (num: number) => void;
  hasLike: any;
  setHasLike: (obj: any) => void;
  likeItem: string[];
  setLikeItem: (arr: string[]) => void;
}) => {
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
  return (
    <div className="TopSold">
      <h1>Хиты продаж</h1>
      <Slider {...settings}>
        {hasLike.map((el: any) => {
          return (
            <div className="topOneSlide" key={el.id}>
              <img src={el.img} alt="" />
              <div className="buttons">
                <button
                  onClick={async () => {
                    try {
                      const user = JSON.parse(
                        window.localStorage.getItem("user")!
                      );
                      if (!user) {
                        throw new CatchError(404, "Вы не вошли в аккаунт");
                      }
                      if (el.activeLike) {
                        const body = {
                          jsonrpc: "2.0",
                          id: "1234567890",
                          method: "LikeDevice.remove",
                          params: {
                            staticId: el.id,
                          },
                        };
                        await axios.post("http://localhost:7000", body, {
                          headers: {
                            Authorization: `Bearer ${user.token}`,
                          },
                        });
                        el.activeLike = false;
                      } else {
                        const body = {
                          jsonrpc: "2.0",
                          id: "1234567890",
                          method: "LikeDevice.add",
                          params: {
                            name: el.title,
                            price: el.price,
                            pathImage: el.img,
                            staticId: el.id,
                            type: el.type,
                            brand: el.brand,
                            isActiveLike: true,
                          },
                        };
                        await axios.post("http://localhost:7000", body, {
                          headers: {
                            Authorization: `Bearer ${user.token}`,
                          },
                        });
                        el.activeLike = true;
                      }
                      setHasLike([...hasLike]);
                    } catch (e: any) {
                      if (e instanceof CatchError) {
                        alert(e.message);
                      }
                    }
                  }}
                  className={el.activeLike ? "isLike" : ""}
                >
                  <FiHeart />
                </button>
                <button
                  onClick={async () => {
                    try {
                      if (!el.activeBasket) {
                        const user = JSON.parse(
                          window.localStorage.getItem("user")!
                        );
                        if (!user) {
                          throw new CatchError(404, "Вы не вошли в аккаунт");
                        }
                        const body = {
                          jsonrpc: "2.0",
                          id: "1234567890",
                          method: "Device.add",
                          params: {
                            name: el.title,
                            price: el.price,
                            type: el.type,
                            brand: el.brand,
                            image: el.img,
                            staticId: el.id,
                          },
                        };
                        await axios.post("http://localhost:7000", body, {
                          headers: {
                            Authorization: `Bearer ${user.token}`,
                          },
                        });
                        el.activeBasket = true;
                        count += 1;
                        setCount(count);
                        setHasLike([...hasLike]);
                      }
                    } catch (e: any) {
                      if (e instanceof CatchError) {
                        alert(e.message);
                        return;
                      }
                      const error = e.response.data.error.message;
                      alert(error);
                    }
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
