import React from "react";
import ReusableCard from "./ReusableCard";

interface BenefitsPageProps {
  setPage: (page: number) => void;
}

function BenefitsPage(props: BenefitsPageProps) {
  return (
    <>
      <h1>Kanta-asiakasedut</h1>
      <ReusableCard
        imageHeight={225}
        handleClick={() => props.setPage(1)}
        imageName="bike"
        title="Käytä ja kerää vuokrapäiviä"
        buttonText="Vuokraus"
        text="Ostamalla tuotteita Kierrätyskeskuksen kanta-asiakkaana kerrytät vuokrapäiviä, joiden avulla voit lainata meiltä esimerkiksi pyöriä ja työkaluja."
      />
      <ReusableCard
        imageHeight={225}
        handleClick={() => props.setPage(1)}
        imageName="shirts"
        title="Tilaa verkosta, maksa paikanpäällä"
        buttonText="Siirry verkkokauppaan"
        text="Tarjoamme kanta-asiakkaillemme mahdollisuuden varata tuotteen verkkokaupasta ja maksaa vasta kun tulet noutamaan tuotteen myymälästämme. Jos tuote ei miellytä livenä, sitä ei tarvitse ostaa!"
      />
    </>
  );
}

export default BenefitsPage;
