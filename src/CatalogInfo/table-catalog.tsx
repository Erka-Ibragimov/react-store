import { FiChevronRight } from "react-icons/fi";

export const DetailCatalogInfo = ({
  active,
  setActive,
}: {
  active: {
    closet: boolean;
    table: boolean;
    chair: boolean;
    dishes: boolean;
    sofas: boolean;
    lamps: boolean;
    hangers: boolean;
    armchairs: boolean;
    coasters: boolean;
  };
  setActive: any;
}) => {
  return (
    <div className="DetailCatalogInfo">
      <div className={active.closet ? "closet active" : "closet"}>
        <h1>
          Шкафы <FiChevronRight />
        </h1>
      </div>
      <div className={active.table ? "table active" : "table"}>
        <h1>
          Столы <FiChevronRight />
        </h1>
      </div>
      <div className={active.chair ? "chair active" : "chair"}>
        <h1>
          Стулья <FiChevronRight />
        </h1>
      </div>
      <div className={active.dishes ? "dishes active" : "dishes"}>
        <h1>
          Тарелки <FiChevronRight />
        </h1>
      </div>
      <div className={active.sofas ? "sofas active" : "sofas"}>
        <h1>
          Диваны <FiChevronRight />
        </h1>
      </div>
      <div className={active.lamps ? "lamps active" : "lamps"}>
        <h1>
          Лампы <FiChevronRight />
        </h1>
      </div>
      <div className={active.hangers ? "hangers active" : "hangers"}>
        <h1>
          Вашалки <FiChevronRight />
        </h1>
      </div>
      <div className={active.armchairs ? "armchairs active" : "armchairs"}>
        <h1>
          Кресла <FiChevronRight />
        </h1>
      </div>
      <div className={active.coasters ? "coasters active" : "coasters"}>
        <h1>
          Подставки <FiChevronRight />
        </h1>
      </div>
    </div>
  );
};
