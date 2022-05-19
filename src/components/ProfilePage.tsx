import React, { useEffect } from 'react';
import QrCodeCard from './QrCodeCard';

function ProfilePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <>
      <h1>Profiili</h1>
      <QrCodeCard />
    </>
  );
}

export default ProfilePage;
