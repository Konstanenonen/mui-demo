import React from "react";
import QrCodeCard from "./QrCodeCard";
import ReusableCard from "./ReusableCard";
import Statics from "./Statics";

interface FrontPageProps {
  setPage: (page: number) => void;
}

function FrontPage(props: FrontPageProps) {
  return (
    <>
      <h1>Etusivu</h1>
      <QrCodeCard />
      <Statics />
      <ReusableCard
        setPage={props.setPage}
        destinationPage={3}
        title="Kierrätyksesi vaikutus"
        imageName="chart"
        buttonText="Tilastot"
        text="Katso kaavioiden avulla kuinka paljon asiointisi Kierrätyskeskuksessa on säästänyt luontoa verrattuna mediaanikuluttajaan."
      />
    </>
  );
}

export default FrontPage;
