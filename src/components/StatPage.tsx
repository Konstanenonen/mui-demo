import React, { useState } from "react";
import Statics from "./Statics";
import Chart from "../images/cool-chart.png";
import Chart2 from "../images/second-chart.png";
import { Alert, AlertTitle, Box, Tabs, Tab } from "@mui/material";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface StatPageProps {
  customerScore: customerScore;
}

function StatPage(props: StatPageProps) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <h1>Tilastot</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab value="one" label="Kokonaiskehitys" />
        <Tab value="two" label="Kuukausittain" />
      </Tabs>
      {value === "one" && <img
        width="300"
        height="200"
        src={Chart}
        alt="Suora, joka kertoo kuinka paljon olet säästänyt luonnonvaroja verrattuna keskivertokuluttajaan."
      />}
      {value === "two" && <img
        width="300"
        height="200"
        src={Chart2}
        alt="Pylväsdiagrammi"
      />}
      <Statics customerScore={props.customerScore} />
      <Box sx={{ pl: "60px", pr: "60px" }}>
        <Alert severity="info">
          <AlertTitle>Lisätietoa</AlertTitle>
          Nämä luvut on laskettu verraten luonnonvarojen käyttöä siihen, että
          olisit meiltä ostamiesi tuotteiden sijaan hankkinut tuotteet uusina.
        </Alert>
      </Box>
    </>
  );
}

export default StatPage;
