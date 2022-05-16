import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsightsIcon from "@mui/icons-material/Insights";
import "./nav.css";

interface BottomNavProps {
  setPage: (page: number) => void;
  page: number;
}

function BottomNav(props: BottomNavProps) {
  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={props.page}
        onChange={(event, newValue) => {
          props.setPage(newValue);
        }}
      >
        <BottomNavigationAction label="Etusivu" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Suosikit"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction label="Tilastot" icon={<InsightsIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav;
