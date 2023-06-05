import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import top1sold from "./images/top-sold-1.svg";
import top2sold from "./images/top-sold-2.svg";
import top3sold from "./images/top-sold-3.svg";
import top4sold from "./images/top-sold-4.svg";
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
  return (
    <div className="TopSold">
      <h1>Хиты продаж</h1>
      <Slider {...settings}>
        <div className="topOneSlide">
          <img src={top1sold} alt="" />
          <div className="buttons">
            <button>
              <FiHeart />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>
          <h3>Диван "Ergonomic Rubber Shoes”</h3>
          <p>35 990 ₽</p>
        </div>
        <div className="topOneSlide">
          <img src={top2sold} alt="" />
          <div className="buttons">
            <button>
              <FiHeart />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>
          <h3>Диван "Ergonomic Rubber Shoes”</h3>
          <p>35 990 ₽</p>
        </div>
        <div className="topOneSlide">
          <img src={top3sold} alt="" />
          <div className="buttons">
            <button>
              <FiHeart />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>
          <h3>Диван "Ergonomic Rubber Shoes”</h3>
          <p>35 990 ₽</p>
        </div>
        <div className="topOneSlide">
          <img src={top4sold} alt="" />
          <div className="buttons">
            <button>
              <FiHeart />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>
          <h3>Диван "Ergonomic Rubber Shoes”</h3>
          <p>35 990 ₽</p>
        </div>
        <div className="topOneSlide">
          <img src={top1sold} alt="" />
          <div className="buttons">
            <button>
              <FiHeart />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>
          <h3>Диван "Ergonomic Rubber Shoes”</h3>
          <p>35 990 ₽</p>
        </div>
        <div className="topOneSlide">
          <img src={top2sold} alt="" />
          <div className="buttons">
            <button>
              <FiHeart />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>
          <h3>Диван "Ergonomic Rubber Shoes”</h3>
          <p>35 990 ₽</p>
        </div>
      </Slider>
    </div>
  );
};
