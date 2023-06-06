export const BasketResult = ({ dataBasket }: { dataBasket: any }) => {
  return (
    <div
      className={
        dataBasket.length !== 0 ? "BasketResult" : "BasketResult active"
      }
    >
      {dataBasket.map((el: any) => {
        console.log(el);
        return <div key={el.id} className="BasketItem"></div>;
      })}
    </div>
  );
};
