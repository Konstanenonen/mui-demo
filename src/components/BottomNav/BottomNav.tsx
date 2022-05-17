import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsightsIcon from "@mui/icons-material/Insights";
import Paper from "@mui/material/Paper";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './bottom.css';

interface BottomNavProps {
  setPage: (page: number) => void;
  page: number;
}

function BottomNav(props: BottomNavProps) {
  return (
    <Paper
      className="bottom-nav"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={props.page}
        onChange={(event, newValue) => {
          props.setPage(newValue);
        }}
      >
        <BottomNavigationAction label="Etusivu" icon={<HomeIcon />} />
        <BottomNavigationAction label="Kauppa" icon={<ShoppingBagIcon />} />
        <BottomNavigationAction
          label="Etusi"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction label="Tilastot" icon={<InsightsIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav;
