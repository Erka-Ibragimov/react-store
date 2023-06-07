import { FiPlus, FiMinus } from "react-icons/fi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
export const BasketResult = ({
  dataBasket,
  setDataBasket,
  count,
  setCount,
  hasLike,
  setHasLike,
  basketActive,
  setBasketActive,
}: {
  dataBasket: any;
  setDataBasket: any;
  count: number;
  setCount: (num: number) => void;
  hasLike: any;
  setHasLike: any;
  basketActive: boolean;
  setBasketActive: (el: boolean) => void;
}) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const sum = dataBasket.reduce(
      (previousValue: any, currentValue: any) =>
        previousValue + Number(currentValue.price),
      0
    );

    setTotalSum(sum);
  }, [basketActive]);

  return (
    <div className={basketActive ? "BasketResult" : "BasketResult active"}>
      <div className="titleAndExit">
        <h1>Ваша корзина:</h1>
        <button
          onClick={() => {
            setBasketActive(false);
          }}
        >
          X
        </button>
      </div>
      <div className="mainBlock">
        <div className="things">
          <h1
            className={
              dataBasket.length === 0 ? "emptyBasket" : "emptyBasket active"
            }
          >
            Корзина пуста
          </h1>
          {dataBasket.map((el: any) => {
            return (
              <div key={el.id} className="BasketItem">
                <input type="checkbox" />
                <img src={el.pathImg} alt="" />
                <div className="title">
                  <h3>Название: {el.name}</h3>
                  <h4>Бренд: {el.brand.name}</h4>
                  <h5>Вид: {el.type.name}</h5>
                </div>
                <div className="countOneThing">
                  <button
                    onClick={async () => {
                      const user = JSON.parse(
                        window.localStorage.getItem("user")!
                      );
                      const body = {
                        jsonrpc: "2.0",
                        id: "1234567890",
                        method: "Device.count",
                        params: {
                          deviceId: el.id,
                          count: false,
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
                        method: "Device.getAll",
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
                      const data = response.data.result;
                      setDataBasket([...data]);
                      setTotalSum(totalSum - +el.price);
                    }}
                    className="minus"
                  >
                    <FiMinus />
                  </button>
                  <p>{el.count}</p>
                  <button
                    onClick={async () => {
                      const user = JSON.parse(
                        window.localStorage.getItem("user")!
                      );
                      const body = {
                        jsonrpc: "2.0",
                        id: "1234567890",
                        method: "Device.count",
                        params: {
                          deviceId: el.id,
                          count: true,
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
                        method: "Device.getAll",
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
                      const data = response.data.result;
                      setDataBasket(data);
                      setTotalSum(totalSum + +el.price);
                    }}
                    className="plus"
                  >
                    <FiPlus />
                  </button>
                </div>
                <div className="delete">
                  <button
                    onClick={async () => {
                      try {
                        const user = JSON.parse(
                          window.localStorage.getItem("user")!
                        );
                        const body = {
                          jsonrpc: "2.0",
                          id: "1234567890",
                          method: "Device.remove",
                          params: {
                            deviceId: el.id,
                          },
                        };
                        const responseOfRemove = await axios.post(
                          "http://localhost:7000",
                          body,
                          {
                            headers: {
                              Authorization: `Bearer ${user.token}`,
                            },
                          }
                        );
                        const countOfRemove =
                          responseOfRemove.data.result.count;
                        const priceOfRemove =
                          responseOfRemove.data.result.price;
                        const bodyGetAll = {
                          jsonrpc: "2.0",
                          id: "1234567890",
                          method: "Device.getAll",
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
                        const data = response.data.result;
                        hasLike.forEach((item: any) => {
                          if (item.id === el.staticId) {
                            item.activeBasket = false;
                          }
                        });
                        setHasLike([...hasLike]);
                        setCount(count - 1);
                        setTotalSum(totalSum - countOfRemove * +priceOfRemove);
                        setDataBasket([...data]);
                      } catch (e: any) {
                        const error = e.response.data.error.message;
                        alert(error);
                      }
                    }}
                  >
                    <BsFillTrash3Fill /> Удалить
                  </button>
                  <h3>{+el.price * el.count}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="resultToPay">
          <h1>Ваш заказ</h1>
          <div className="items">
            <h3>{`Товары (${count}):`}</h3>
            <p>{`${totalSum} сумм`}</p>
          </div>
          <h4>{`Доставка ${new Date().toLocaleString()}`}</h4>
          <h2>
            Итог: <span>{`${totalSum} сумм`}</span>
          </h2>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};
