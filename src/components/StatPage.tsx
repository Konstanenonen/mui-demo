import React from 'react';
import Statics from './Statics';
import Chart from '../images/cool-chart.png';

function StatPage() {
  return (
    <>
      <h1>Tilastot</h1>
      <img width="300" src={Chart} alt="Suora, joka kertoo kuinka paljon olet säästänyt luonnonvaroja verrattuna keskivertokuluttajaan." />
      <Statics />
    </>
  )
}

export default StatPage;
