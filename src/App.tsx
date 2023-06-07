import React from "react";
import logo from "./logo.svg";
import car from "./images/delivery-truck.svg";
import "./App.scss";
import { Location } from "./location";
import { Catalog } from "./catalog";
import { Route } from "./Route";
import { Slaider } from "./Slaider";
import { TopSold } from "./TopSold";
import { useState } from "react";
import top1sold from "./images/top-sold-1.svg";
import top2sold from "./images/top-sold-2.svg";
import top3sold from "./images/top-sold-3.svg";
import top4sold from "./images/top-sold-4.svg";

function App() {
  const [hasLike, setHasLike] = useState([
    {
      id: 1,
      img: top1sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "100",
      rate: null,
      type: "furniture",
      brand: "jojo",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 2,
      img: top2sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "100",
      rate: null,
      type: "furniture",
      brand: "jojo",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 3,
      img: top3sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "100",
      rate: null,
      type: "furniture",
      brand: "jojo",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 4,
      img: top4sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "100",
      rate: null,
      type: "furniture",
      brand: "jojo",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 5,
      img: top3sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "100",
      rate: null,
      type: "furniture",
      brand: "jojo",
      activeLike: false,
      activeBasket: false,
    },
    {
      id: 6,
      img: top4sold,
      title: 'Диван "Ergonomic Rubber Shoes”',
      price: "100",
      rate: null,
      type: "furniture",
      brand: "jojo",
      activeLike: false,
      activeBasket: false,
    },
  ]);
  const [nameOfUser, setNameOfUser] = useState("");
  const [image, setImage] = useState<string | null>(null);
  let [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h4 className="freeDelivery">
        <span>
          <img src={car} alt="" />
        </span>
        Доставка и сборы по Харькову бесплатно
      </h4>
      <Location nameOfUser={nameOfUser} image={image} setImage={setImage} />
      <Catalog
        setNameOfUser={setNameOfUser}
        nameOfUser={nameOfUser}
        image={image}
        setImage={setImage}
        count={count}
        setCount={setCount}
        hasLike={hasLike}
        setHasLike={setHasLike}
      />
      <Route />
      <Slaider />
      <TopSold
        count={count}
        setCount={setCount}
        hasLike={hasLike}
        setHasLike={setHasLike}
      />
    </div>
  );
}

export default App;
