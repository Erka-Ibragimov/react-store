import { useState } from "react";
import { DetailCatalogInfo } from "./CatalogInfo/table-catalog";

const selectItem = (name: string) => {
  const item: any = {
    closet: false,
    table: false,
    chair: false,
    dishes: false,
    sofas: false,
    lamps: false,
    hangers: false,
    armchairs: false,
    coasters: false,
  };
  item[name] = true;
  return item;
};

export const DetailCatalog = ({ active, setActive }: { active: boolean; setActive: Function }) => {
  const [activeDetailCatalog, setActiveDetailCatalog] = useState<{
    closet: boolean;
    table: boolean;
    chair: boolean;
    dishes: boolean;
    sofas: boolean;
    lamps: boolean;
    hangers: boolean;
    armchairs: boolean;
    coasters: boolean;
  }>({
    closet: false,
    table: false,
    chair: false,
    dishes: false,
    sofas: false,
    lamps: false,
    hangers: false,
    armchairs: false,
    coasters: false,
  });
  console.log(active);
  return (
    <div className={active ? "DetailCatalog" : "DetailCatalog active"}>
      <div className="selectFur">
        <button
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("closet") });
          }}
        >
          Шкафы
        </button>
        <button
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("table") });
          }}
        >
          Столы
        </button>
        <button>Стулья</button>
        <button>Тарелки</button>
        <button>Диваны</button>
        <button>Лампы</button>
        <button>Вешалки</button>
        <button>Кресла</button>
        <button>Подставки</button>
      </div>
      <div className="detailSelectFur">
        <DetailCatalogInfo active={activeDetailCatalog} setActive={setActiveDetailCatalog} />
      </div>
    </div>
  );
};
