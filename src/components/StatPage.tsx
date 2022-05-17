import React from "react";
import Statics from "./Statics";
import Chart from "../images/cool-chart.png";
import { Alert, AlertTitle, Box } from "@mui/material";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface StatPageProps {
  customerScore: customerScore;
}

function StatPage(props: StatPageProps) {
  return (
    <>
      <h1>Tilastot</h1>
      <img
        width="300"
        src={Chart}
        alt="Suora, joka kertoo kuinka paljon olet säästänyt luonnonvaroja verrattuna keskivertokuluttajaan."
      />
      <Statics customerScore={props.customerScore} />
      <Box sx={{ pl: "60px", pr: "60px" }}>
        <Alert severity="info">
          <AlertTitle>Lisätietoa</AlertTitle>
          Nämä luvut on laskettu verraten luonnonvarojen käyttöä siihen,
          että olisit meiltä ostamiesi tuotteiden sijaan hankkinut tuotteet uusina.
        </Alert>
      </Box>
    </>
  );
}

export default StatPage;
