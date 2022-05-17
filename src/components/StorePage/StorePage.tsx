import React, { useState } from "react";
import ControlledSpeedDial from "../ControlledSpeedDial";
import ReusableCard from "../ReusableCard";
import "./store.css";

interface StorePageProps {
  setPage: (page: number) => void;
}

function StorePage(props: StorePageProps) {
  const [basketAmount, setBasketAmount] = useState<number>(3);

  return (
    <>
      <h1>Verkkokauppa</h1>
      <div className="grid">
        <ReusableCard
          imageHeight={125}
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          imageHeight={125}
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
      </div>
      <div className="bottom-right">
        <ControlledSpeedDial />
      </div>
    </>
  );
}

export default StorePage;
