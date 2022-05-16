import { Button } from '@mui/material';
import React from 'react';
import FrontPage from '../FrontPage';
import './main.css';

interface MainViewProps {
  page: number;
}

function MainView(props: MainViewProps) {

  function currentPage(page: number) {
    switch (page) {
      case 0:
        return <FrontPage />;
      case 1:
        return <Button variant="text">Toinen</Button>;
      case 2:
        return <Button variant="text">Kolmas</Button>;
      default:
        return <Button variant="text">Jiit</Button>;
    }
  }

  return (
    <div className="main-items">
      {currentPage(props.page)}
    </div>
  );
}

export default MainView;
