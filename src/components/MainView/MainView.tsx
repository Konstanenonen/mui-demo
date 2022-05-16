import { Button } from '@mui/material';
import React from 'react';
import FrontPage from '../FrontPage';
import StatPage from '../StatPage';
import './main.css';

interface MainViewProps {
  page: number;
  setPage: (page: number) => void;
}

function MainView(props: MainViewProps) {

  function currentPage(page: number) {
    switch (page) {
      case 0:
        return <FrontPage setPage={props.setPage} />;
      case 1:
        return <Button variant="text">Verkkokauppa</Button>;
      case 2:
        return <Button variant="text">Kanta-asiakasedut</Button>;
      case 3:
        return <StatPage />;
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
