import React, { useState } from "react";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsightsIcon from '@mui/icons-material/Insights';
import './nav.css';

interface BottomNavProps {
  setPage: (page: number) => void;
}

function BottomNav(props: BottomNavProps) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <BottomNavigation
      showLabels
      value={selected}
      onChange={(event, newValue) => {
        setSelected(newValue);
        props.setPage(newValue);
      }}
      className="bottom-nav"
    >
      <BottomNavigationAction label="Etusivu" icon={<HomeIcon />} />
      <BottomNavigationAction label="Suosikit" icon={<FavoriteBorderIcon />} />
      <BottomNavigationAction label="Tilastot" icon={<InsightsIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
