import { Pagination } from "@mui/material";
import React, { useState } from "react";
import ControlledSpeedDial from "../ControlledSpeedDial";
import ReusableCard from "../ReusableCard";
import ShopDrawer from "../ShopDrawer";
import "./store.css";

interface StorePageProps {
  setPage: (page: number) => void;
}

function StorePage(props: StorePageProps) {
  const [itemAmount, setItemAmount] = useState<number>(0);

  return (
    <>
      <h1>Verkkokauppa</h1>
      <ShopDrawer />
      <div className="grid">
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Maastopyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Maastopyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Maastopyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Maastopyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Maastopyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Maastopyörä"
          buttonText="Osta"
          text="100 €"
        />
      </div>
      <Pagination sx={{ mb: 5 }} count={10} color="primary" />
      <div className="bottom-right">
        <ControlledSpeedDial setItemAmount={setItemAmount} itemAmount={itemAmount} />
      </div>
    </>
  );
}

export default StorePage;
