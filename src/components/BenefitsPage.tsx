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
        setPage={props.setPage}
        destinationPage={1}
        imageName="bike"
        title="Käytä vuokrapäiväsi"
        buttonText="Vuokraus"
        text="Ostamalla tuotteita Kierrätyskeskuksen kanta-asiakkaana kerrytät vuokrapäiviä, joiden avulla voit lainta meiltä esimerkiksi pyöriä ja työkaluja."
      />
    </>
  );
}

export default BenefitsPage;
