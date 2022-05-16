import React from 'react';
import MediaCard from './QrCodeCard';
import Statics from './Statics';
import StaticsCard from './StaticsCard';

function FrontPage() {
  return (
    <>
      <h1>Etusivu</h1>
      <MediaCard />
      <Statics />
      <StaticsCard />
    </>
  );
}

export default FrontPage;
