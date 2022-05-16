import React from 'react';
import QrCodeCard from './QrCodeCard';
import Statics from './Statics';
import StaticsCard from './StaticsCard';

interface FrontPageProps {
  setPage: (page: number) => void;
}

function FrontPage(props: FrontPageProps) {
  return (
    <>
      <h1>Etusivu</h1>
      <QrCodeCard />
      <Statics />
      <StaticsCard setPage={props.setPage} />
    </>
  );
}

export default FrontPage;
