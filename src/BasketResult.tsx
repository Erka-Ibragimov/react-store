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
  checkoutActive,
  setCheckoutActive,
}: {
  dataBasket: any;
  setDataBasket: any;
  count: number;
  setCount: (num: number) => void;
  hasLike: any;
  setHasLike: any;
  basketActive: boolean;
  setBasketActive: (el: boolean) => void;
  checkoutActive: boolean;
  setCheckoutActive: (el: boolean) => void;
}) => {
  const [totalSum, setTotalSum] = useState(0);
  const [inputCheck, setInputCheck] = useState(true);
  const [btnActive, setBtnActive] = useState(true);

  useEffect(() => {
    const sum = dataBasket.reduce(
      (previousValue: any, currentValue: any) =>
        previousValue + Number(currentValue.price),
      0
    );
    setTotalSum(sum);
  }, [basketActive]);

  useEffect(() => {
    if (totalSum === 0) {
      setBtnActive(false);
    } else {
      setBtnActive(true);
    }
  }, [totalSum]);

  return (
    <div className={basketActive ? "BasketResult" : "BasketResult active"}>
      <div className="titleAndExit">
        <h1>Ваша корзина, {count} товара</h1>
        <button
          onClick={() => {
            setBasketActive(false);
          }}
        >
          X
        </button>
      </div>
      <div className="selectAll">
        <input
          type="checkbox"
          checked={inputCheck}
          onChange={async (e) => {
            const arrDeviceId: any = [];
            let newTotalSum: number = 0;
            const test = e.currentTarget.checked;
            dataBasket.forEach((el: any) => {
              arrDeviceId.push(el.id);
              if (e.currentTarget.checked) {
                newTotalSum += el.count * +el.price;
                el.isCheck = true;
              } else {
                newTotalSum = 0;
                el.isCheck = false;
              }
            });
            const user = JSON.parse(window.localStorage.getItem("user")!);
            const body = {
              jsonrpc: "2.0",
              id: "1234567890",
              method: "Device.isCheckAll",
              params: {
                arrDeviceId,
                isCheck: e.currentTarget.checked,
              },
            };
            await axios.post("http://localhost:7000", body, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
            setTotalSum(newTotalSum);
            setInputCheck(test);
            setDataBasket([...dataBasket]);
          }}
        />
        <p>{inputCheck ? "Снять все" : "Выделить все"}</p>
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
            let allIsChecked = 0;
            return (
              <div key={el.id} className="BasketItem">
                <input
                  type="checkbox"
                  checked={el.isCheck}
                  onChange={async (e) => {
                    if (!e.currentTarget.checked) {
                      setInputCheck(false);
                      setTotalSum(totalSum - el.count * +el.price);
                    } else {
                      setTotalSum(totalSum + el.count * +el.price);
                    }
                    el.isCheck = e.currentTarget.checked;
                    const user = JSON.parse(
                      window.localStorage.getItem("user")!
                    );
                    const body = {
                      jsonrpc: "2.0",
                      id: "1234567890",
                      method: "Device.isCheck",
                      params: {
                        deviceId: el.id,
                        isCheck: e.currentTarget.checked,
                      },
                    };
                    await axios.post("http://localhost:7000", body, {
                      headers: {
                        Authorization: `Bearer ${user.token}`,
                      },
                    });
                    dataBasket.forEach((q: any) => {
                      if (q.isCheck) {
                        allIsChecked += 1;
                      }
                    });

                    if (allIsChecked === dataBasket.length) {
                      allIsChecked = 0;
                      setInputCheck(true);
                    }
                    setDataBasket([...dataBasket]);
                  }}
                />
                <img src={el.pathImg} alt="" />
                <div className="title">
                  <h3>Название: {el.name}</h3>
                  <h4>Бренд: {el.brand.name}</h4>
                  <h5>Вид: {el.type.name}</h5>
                </div>
                <div className="countOneThing">
                  <button
                    onClick={async () => {
                      let allIsChecked3 = 0;
                      const user = JSON.parse(
                        window.localStorage.getItem("user")!
                      );
                      const bodyIsCheck = {
                        jsonrpc: "2.0",
                        id: "1234567890",
                        method: "Device.isCheck",
                        params: {
                          deviceId: el.id,
                          isCheck: true,
                        },
                      };
                      await axios.post("http://localhost:7000", bodyIsCheck, {
                        headers: {
                          Authorization: `Bearer ${user.token}`,
                        },
                      });
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
                      data.forEach((q: any) => {
                        if (q.isCheck) {
                          allIsChecked += 1;
                        }
                      });

                      if (allIsChecked === dataBasket.length) {
                        allIsChecked = 0;
                        setInputCheck(true);
                      }
                      setDataBasket([...data]);
                      if (!el.isCheck) {
                        setTotalSum(totalSum + +el.price * (el.count - 1));
                      } else {
                        setTotalSum(totalSum - +el.price);
                      }
                    }}
                    className="minus"
                  >
                    <FiMinus />
                  </button>
                  <p>{el.count}</p>
                  <button
                    onClick={async () => {
                      let allIsChecked2 = 0;
                      const user = JSON.parse(
                        window.localStorage.getItem("user")!
                      );
                      const bodyIsCheck = {
                        jsonrpc: "2.0",
                        id: "1234567890",
                        method: "Device.isCheck",
                        params: {
                          deviceId: el.id,
                          isCheck: true,
                        },
                      };
                      await axios.post("http://localhost:7000", bodyIsCheck, {
                        headers: {
                          Authorization: `Bearer ${user.token}`,
                        },
                      });
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
                      data.forEach((q: any) => {
                        if (q.isCheck) {
                          allIsChecked += 1;
                        }
                      });

                      if (allIsChecked === dataBasket.length) {
                        allIsChecked = 0;
                        setInputCheck(true);
                      }
                      setDataBasket(data);
                      if (!el.isCheck) {
                        setTotalSum(totalSum + +el.price * (el.count + 1));
                      } else {
                        setTotalSum(totalSum + +el.price);
                      }
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
                        if (el.isCheck)
                          setTotalSum(
                            totalSum - countOfRemove * +priceOfRemove
                          );

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
          <button
            className={btnActive ? "" : "noactive"}
            onClick={() => {
              if (totalSum === 0) {
                return;
              }
              setBasketActive(false);
              setCheckoutActive(true);
            }}
          >
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
};
