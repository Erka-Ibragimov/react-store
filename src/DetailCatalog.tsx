import { useState } from "react";
import { DetailCatalogInfo } from "./CatalogInfo/table-catalog";
import { FiChevronRight } from "react-icons/fi";

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

export const DetailCatalog = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Function;
}) => {
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
  return (
    <div className={active ? "DetailCatalog" : "DetailCatalog active"}>
      <div className="selectFur">
        <button
          className={activeDetailCatalog.closet ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("closet") });
          }}
        >
          Шкафы
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.table ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("table") });
          }}
        >
          Столы
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.chair ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("chair") });
          }}
        >
          Стулья
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.dishes ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("dishes") });
          }}
        >
          Тарелки
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.sofas ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("sofas") });
          }}
        >
          Диваны
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.lamps ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("lamps") });
          }}
        >
          Лампы
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.hangers ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("hangers") });
          }}
        >
          Вешалки
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.armchairs ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("armchairs") });
          }}
        >
          Кресла
          <span>
            <FiChevronRight />
          </span>
        </button>
        <button
          className={activeDetailCatalog.coasters ? "avtiveButton" : ""}
          onMouseEnter={(e) => {
            setActiveDetailCatalog({ ...selectItem("coasters") });
          }}
        >
          Подставки
          <span>
            <FiChevronRight />
          </span>
        </button>
      </div>
      <div className="detailSelectFur">
        <DetailCatalogInfo
          active={activeDetailCatalog}
          setActive={setActiveDetailCatalog}
        />
      </div>
    </div>
  );
};
