import axios from "axios";

export const Checkout = ({
  checkoutActive,
  setCheckoutActive,
  dataBasket,
  setDataBasket,
}: {
  checkoutActive: boolean;
  setCheckoutActive: (el: boolean) => void;
  dataBasket: any;
  setDataBasket: any;
}) => {
  return (
    <div className={checkoutActive ? "Checkout" : "Checkout none"}>
      <h1>DDDD</h1>
    </div>
  );
};
