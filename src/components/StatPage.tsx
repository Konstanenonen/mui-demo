import React from 'react';
import Statics from './Statics';
import Chart from '../images/cool-chart.png';

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
      <img width="300" src={Chart} alt="Suora, joka kertoo kuinka paljon olet säästänyt luonnonvaroja verrattuna keskivertokuluttajaan." />
      <Statics customerScore={props.customerScore} />
    </>
  )
}

export default StatPage;
