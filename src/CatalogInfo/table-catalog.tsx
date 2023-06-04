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
      <h1 className={active.closet ? "DetailCatalogInfoH1 active" : "DetailCatalogInfoH1"}>B</h1>
      <h2 className={active.table ? "DetailCatalogInfoH2 active" : "DetailCatalogInfoH1"}>A</h2>
    </div>
  );
};
