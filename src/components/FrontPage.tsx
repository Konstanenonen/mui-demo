import React, { useEffect } from "react";
import QrCodeCard from "./QrCodeCard";
import ReusableCard from "./ReusableCard";
import Statics from "./Statics";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface FrontPageProps {
  setPage: (page: number) => void;
  customerScore: customerScore;
}

function FrontPage(props: FrontPageProps) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>Etusivu</h1>
      <QrCodeCard />
      <Statics customerScore={props.customerScore} />
      <ReusableCard
        imageHeight={225}
        handleClick={() => props.setPage(2)}
        title="Kanta-asiakasetusi"
        imageName="balloons"
        buttonText="Etusi"
        text="Kanta-asiakkaana sinulla on paljon käytettäviä etuja. Tutustu niihin tarkemmin edut-sivulta."
      />
      <ReusableCard
        imageHeight={225}
        handleClick={() => props.setPage(3)}
        title="Kierrätyksesi vaikutus"
        imageName="chart"
        buttonText="Tilastot"
        text="Katso kaavioiden avulla kuinka paljon asiointisi Kierrätyskeskuksessa on säästänyt luontoa verrattuna mediaanikuluttajaan."
      />
    </>
  );
}

export default FrontPage;
