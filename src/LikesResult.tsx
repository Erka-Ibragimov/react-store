import axios from "axios";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { CatchError } from "./errorHandler/catchError";
export const LikesResult = ({
  openLikes,
  setOpenLikes,
  resultLikes,
  setResultLikes,
  hasLike,
  setHasLike,
}: {
  openLikes: boolean;
  setOpenLikes: (val: boolean) => void;
  resultLikes: any;
  setResultLikes: any;
  hasLike: any;
  setHasLike: any;
}) => {
  return (
    <div className={openLikes ? "LikesResult" : "LikesResult active"}>
      <div className="titleAndExist">
        <h1>Мои желания</h1>
        <button
          onClick={() => {
            setOpenLikes(false);
          }}
        >
          X
        </button>
      </div>
      <div className="items">
        <h1
          className={
            resultLikes.length === 0 ? "emptyLikes" : "emptyLikes noactive"
          }
        >
          У вас пусто
        </h1>
        {resultLikes.map((el: any) => {
          return (
            <div className="item" key={el.id}>
              <img src={el.pathImage} alt="" />
              <button
                onClick={async () => {
                  const user = JSON.parse(window.localStorage.getItem("user")!);
                  if (!user) {
                    throw new CatchError(404, "Вы не вошли в аккаунт");
                  }
                  const body = {
                    jsonrpc: "2.0",
                    id: "1234567890",
                    method: "LikeDevice.remove",
                    params: {
                      staticId: el.staticId,
                    },
                  };
                  await axios.post("http://localhost:7000", body, {
                    headers: {
                      Authorization: `Bearer ${user.token}`,
                    },
                  });
                  const bodyGetAll = {
                    jsonrpc: "2.0",
                    id: "1234567890",
                    method: "LikeDevice.getAll",
                    params: {},
                  };
                  const response = await axios.post(
                    "http://localhost:7000",
                    bodyGetAll,
                    {
                      headers: {
                        Authorization: `Bearer ${user.token}`,
                      },
                    }
                  );
                  hasLike.forEach((item: any) => {
                    if (item.id === el.staticId) {
                      item.activeLike = false;
                    }
                  });
                  setHasLike([...hasLike]);
                  setResultLikes(response.data.result);
                }}
                className="likedBtn"
              >
                <FiHeart />
              </button>
              <h2>
                Название: <span>{el.name}</span>
              </h2>
              <h3>
                Тип: <span>{el.type}</span>
              </h3>
              <h4>
                Бренд: <span>{el.brand}</span>
              </h4>
              <div className="inBasketAndPrice">
                <p>{el.price} сум</p>
                <button>
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
