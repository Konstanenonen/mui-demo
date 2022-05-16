import { Button } from '@mui/material';
import React from 'react';
import MediaCard from '../MediaCard';
import './main.css';

interface MainViewProps {
  page: number;
}

function MainView(props: MainViewProps) {

  function currentPage(page: number) {
    switch (page) {
      case 0:
        return <MediaCard />;
      case 1:
        return <Button variant="text">Text</Button>;
      case 2:
        return <Button variant="text">Toinen</Button>;
      default:
        return <MediaCard />;
    }
  }

  return (
    <div className="main-items">
      {currentPage(props.page)}
    </div>
  );
}

export default MainView;
