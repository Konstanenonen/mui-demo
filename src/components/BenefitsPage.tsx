import React from "react";
import ReusableCard from "./ReusableCard";

interface BenefitsPageProps {
  setPage: (page: number) => void;
}

function BenefitsPage(props: BenefitsPageProps) {
  const cardArray = [
    {
      imageHeight: 225,
      handleClick: () => props.setPage(1),
      imageName: "shirts",
      title: "Tilaa verkosta, maksa paikanpäällä",
      buttonText: "Siirry verkkokauppaan",
      text: "Tarjoamme kanta-asiakkaillemme mahdollisuuden varata tuotteen verkkokaupasta ja maksaa vasta kun tulet noutamaan tuotteen myymälästämme. Jos tuote ei miellytä livenä, sitä ei tarvitse ostaa!",
    },
    {
      imageHeight: 225,
      handleClick: () => props.setPage(1),
      imageName: "bike",
      title: "Käytä ja kerää vuokrapäiviä",
      buttonText: "Vuokraus",
      text: "Ostamalla tuotteita Kierrätyskeskuksen kanta-asiakkaana kerrytät vuokrapäiviä, joiden avulla voit lainata meiltä esimerkiksi pyöriä ja työkaluja.",
    },
    {
      imageHeight: 225,
      handleClick: () => props.setPage(1),
      imageName: "balloons",
      title: "Kuule kamppanjoista ensimmäisenä",
      buttonText: "Tulevat kamppanjat",
      text: "Tulevistä kamppanjoistamme tiedotetaan ensimmäisenä aina kanta-asiakassovelluksessamme. Kanta-asiakkaat voivat myös antaa palautetta tulevista kamppanjoista ja mahdollisesti vaikuttaa niiden sisältöön!",
    },
    {
      imageHeight: 225,
      handleClick: () => props.setPage(1),
      imageName: "receipt",
      title: "Vaihda kuittisi sähköisiksi",
      buttonText: "Tarkastele kuittejasi",
      text: "Kun näytät digitaalista kanta-asiakaskorttiasi maksaessasi, voit valita että kuittisi tulee sähköisesti kanta-asiakassovellukseesi. Näin kuittisi pysyy varmasti tallessa ja luonto kiittää!",
    },
  ];

  const cardElements = cardArray.map(card => (
    <ReusableCard
        imageHeight={card.imageHeight}
        handleClick={card.handleClick}
        imageName={card.imageName}
        title={card.title}
        buttonText={card.buttonText}
        text={card.text}
      />
  ))

  return (
    <>
      <h1>Kanta-asiakasedut</h1>
      {cardElements}
    </>
  );
}

export default BenefitsPage;
