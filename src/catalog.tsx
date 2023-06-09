import { DetailCatalog } from "./DetailCatalog";
import logo from "./images/free-icon-furniture-5564847.png";
import search from "./images/Search 2.svg";
import ModalsProfile from "./modalProfile";
import { useState } from "react";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import { BasketResult } from "./BasketResult";
import { CatchError } from "./errorHandler/catchError";
import { LikesResult } from "./LikesResult";
import { Checkout } from "./Сheckout";

export const Catalog = ({
  setNameOfUser,
  nameOfUser,
  image,
  setImage,
  count,
  setCount,
  hasLike,
  setHasLike,
}: {
  setNameOfUser: (name: string) => void;
  nameOfUser: string;
  image: string | null;
  setImage: (name: string | null) => void;
  count: number;
  setCount: (num: number) => void;
  hasLike: any;
  setHasLike: (obj: any) => void;
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [catalogActive, setCatalogActive] = useState(false);
  const [basketActive, setBasketActive] = useState(false);
  const [dataBasket, setDataBasket] = useState([]);
  const [openLikes, setOpenLikes] = useState(false);
  const [resultLikes, setResultLikes] = useState([]);
  const [checkoutActive, setCheckoutActive] = useState(false);
  return (
    <div className="Catalog">
      <img src={logo} alt="" className="logoCatalog" />
      <button
        className="buttonCatalog"
        onClick={() => setCatalogActive(catalogActive ? false : true)}
      >
        <span>{catalogActive ? <TfiClose /> : <TfiMenu />}</span>
        Каталог
      </button>
      <div className="Catalog-Detail">
        <DetailCatalog active={catalogActive} setActive={setCatalogActive} />
      </div>
      <form action="" className="searchCatalog">
        <input type="text" placeholder="Искать товар" />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
      <a className="phoneCatalog" href="+998905939927">
        +998905939927
      </a>
      <button
        onClick={async () => {
          try {
            const user = JSON.parse(window.localStorage.getItem("user")!);
            if (!user) {
              throw new CatchError(404, "Не найден пользователь");
            }
            const body = {
              jsonrpc: "2.0",
              id: "1234567890",
              method: "LikeDevice.getAll",
              params: {},
            };
            const response = await axios.post("http://localhost:7000", body, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
            setOpenLikes(true);
            setResultLikes(response.data.result);
          } catch (e: any) {
            if (e instanceof CatchError) {
              alert(e.message);
              return;
            }
            if (e instanceof Error) {
              alert(e.message);
              return;
            }
          }
        }}
        className="heartCatalog"
      >
        <FiHeart />
      </button>
      <button
        onClick={async () => {
          try {
            if (count === 0) {
              throw new CatchError(404, "Ваша корзина пуста");
            }
            const user = JSON.parse(window.localStorage.getItem("user")!);
            const body = {
              jsonrpc: "2.0",
              id: "1234567890",
              method: "Device.getAll",
              params: {},
            };
            const response = await axios.post("http://localhost:7000", body, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
            const data = response.data.result;
            setDataBasket(data);
            setBasketActive(true);
          } catch (e: any) {
            if (e instanceof CatchError) {
              alert(e.message);
              return;
            }
            if (e instanceof Error) {
              alert(e.message);
            }
          }
        }}
        className="basketCatalog"
      >
        <FiShoppingCart />
        <p className={count !== 0 ? "count active" : "count"}>{count}</p>
      </button>
      {nameOfUser ? (
        <button
          onClick={async () => {
            try {
              const user = JSON.parse(window.localStorage.getItem("user")!);
              const body = {
                jsonrpc: "2.0",
                id: "1234567890",
                method: "User.logout",
                params: {},
              };
              await axios.post("http://localhost:7000", body, {
                headers: {
                  Authorization: "Bearer " + user.token,
                },
              });
              window.localStorage.removeItem("user");
              setNameOfUser("");
              setImage(null);
              setCount(0);
              setBasketActive(false);
              setDataBasket([]);
              hasLike.forEach((el: any) => {
                el.activeBasket = false;
              });
              setHasLike([...hasLike]);
            } catch (e: any) {
              const error = e.response.data.error.message;
              alert(error);
            }
          }}
          className="profileCatalog"
        >
          <CiLogout />
        </button>
      ) : (
        <button onClick={() => setModalActive(true)} className="profileCatalog">
          <FiUser />
        </button>
      )}
      <ModalsProfile
        active={modalActive}
        setActive={setModalActive}
        setNameOfUser={setNameOfUser}
      />
      <BasketResult
        dataBasket={dataBasket}
        setDataBasket={setDataBasket}
        count={count}
        setCount={setCount}
        hasLike={hasLike}
        setHasLike={setHasLike}
        basketActive={basketActive}
        setBasketActive={setBasketActive}
        checkoutActive={checkoutActive}
        setCheckoutActive={setCheckoutActive}
      />
      <LikesResult
        openLikes={openLikes}
        setOpenLikes={setOpenLikes}
        resultLikes={resultLikes}
        setResultLikes={setResultLikes}
        hasLike={hasLike}
        setHasLike={setHasLike}
      />
      <Checkout
        checkoutActive={checkoutActive}
        setCheckoutActive={setCheckoutActive}
        dataBasket={dataBasket}
        setDataBasket={setDataBasket}
      />
    </div>
  );
};
