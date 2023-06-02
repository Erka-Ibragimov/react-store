export const DetailCatalog = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Function;
}) => {
  return (
    <div className="DetailCatalog">
      <div className="selectFur">
        <button>Шкафы</button>
        <button>Столы</button>
        <button>Стулья</button>
        <button>Тарелки</button>
        <button>Диваны</button>
        <button>Лампы</button>
        <button>Вешалки</button>
        <button>Кресла</button>
        <button>Подставки</button>
      </div>
      <div className="detailSelectFur"></div>
    </div>
  );
};
