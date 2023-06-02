import { DetailCatalog } from "./DetailCatalog";
import logo from "./images/free-icon-furniture-5564847.png";
import burger from "./images/Menu Candy Box.svg";
import search from "./images/Search 2.svg";
import ModalsProfile from "./modalProfile";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
export const Catalog = () => {
  const [modalActive, setModalActive] = useState(false);
  const [catalogActive, setCatalogActive] = useState(false);
  return (
    <div className="Catalog">
      <img src={logo} alt="" className="logoCatalog" />
      <button className="buttonCatalog" onClick={() => setCatalogActive(true)}>
        <img src={burger} alt="" />
        Каталог
      </button>
      <DetailCatalog active={catalogActive} setActive={setCatalogActive}/>
      <form action="" className="searchCatalog">
        <input type="text" placeholder="Искать товар" />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
      <a className="phoneCatalog" href="+998905939927">
        +998905939927
      </a>
      <button className="heartCatalog">
        <FiHeart />
      </button>
      <button className="basketCatalog">
        <FiShoppingCart />
      </button>
      <button onClick={() => setModalActive(true)} className="profileCatalog">
        <FiUser />
      </button>
      <ModalsProfile active={modalActive} setActive={setModalActive} />
    </div>
  );
};
