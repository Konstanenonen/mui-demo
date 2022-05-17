import { Pagination } from "@mui/material";
import React, { useState } from "react";
import ControlledSpeedDial from "../ControlledSpeedDial";
import ReusableCard from "../ReusableCard";
import ShopDrawer from "../ShopDrawer";
import "./store.css";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface StorePageProps {
  setPage: (page: number) => void;
  setCustomerScore: React.Dispatch<React.SetStateAction<customerScore>>;
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
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
      </div>
      <Pagination sx={{ mb: 5 }} count={10} color="primary" />
      <div className="bottom-right">
        <ControlledSpeedDial setCustomerScore={props.setCustomerScore} setItemAmount={setItemAmount} itemAmount={itemAmount} />
      </div>
    </>
  );
}

export default StorePage;
