import React, { useState } from "react";
import ControlledSpeedDial from "../ControlledSpeedDial";
import ReusableCard from "../ReusableCard";
import "./store.css";

interface StorePageProps {
  setPage: (page: number) => void;
}

function StorePage(props: StorePageProps) {
  const [itemAmount, setItemAmount] = useState<number>(0);

  return (
    <>
      <h1>Verkkokauppa</h1>
      <div className="grid">
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
      </div>
      <div className="bottom-right">
        <ControlledSpeedDial setItemAmount={setItemAmount} itemAmount={itemAmount} />
      </div>
    </>
  );
}

export default StorePage;
