import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CountertopsIcon from '@mui/icons-material/Countertops';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import BrushIcon from '@mui/icons-material/Brush';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FiberNewIcon from '@mui/icons-material/FiberNew';

type Anchor = "top" | "left" | "bottom" | "right";

function ShopDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {name: "Polkupyörät", icon: <DirectionsBikeIcon />},
          {name: "Kirjat", icon: <MenuBookIcon />},
          {name: "Koti ja asuminen", icon: <CountertopsIcon />},
          {name: "Viihde ja elektroniikka", icon: <SportsEsportsIcon />},
          {name: "Urheilu ja harrastukset", icon: <SportsBaseballIcon />},
          {name: "Käsityö ja askartelu", icon: <BrushIcon />},
          {name: "Ale", icon: <LoyaltyIcon />},
          {name: "Uutuudet", icon: <FiberNewIcon />},
        ].map((item, index) => (
          <>
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        sx={{ backgroundColor: "#00A77E", color: "white" }}
        onClick={toggleDrawer("top", true)}
      >
        {"Kategoriat"}
      </Button>
      <SwipeableDrawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {list("top")}
      </SwipeableDrawer>
    </div>
  );
}

export default ShopDrawer;
