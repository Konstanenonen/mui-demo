import React from "react";
import ReusableCard from "../ReusableCard";
import "./store.css";

interface StorePageProps {
  setPage: (page: number) => void;
}

function StorePage(props: StorePageProps) {
  return (
    <>
      <h1>Verkkokauppa</h1>
      <div className="grid">
        <ReusableCard
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
        <ReusableCard
          setPage={props.setPage}
          destinationPage={1}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="Hieno pyörä."
        />
      </div>
    </>
  );
}

export default StorePage;