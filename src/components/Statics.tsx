import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import Co2Icon from "@mui/icons-material/Co2";
import Modal from "./Modal";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface StaticsProps {
  customerScore: customerScore;
}

function Statics(props: StaticsProps) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#00A77E" }}>
            <Co2Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="CO2 päästöjä säästetty"
          secondary={`${props.customerScore.co2} kiloa`}
        />
        <Modal
          title="CO2 päästöjä säästetty"
          text="Tämä luku kertoo kuinka paljon hiilidioksidipäästöjä olet säästänyt luonnolta ostoksiesi avulla."
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#00A77E" }}>
            <InvertColorsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Vettä säästetty"
          secondary={`${props.customerScore.water} litraa`}
        />
        <Modal
          title="Vettä säästetty"
          text="Litramäärä kertoo kuinka paljon puhdasta juomakelpoista vettä olet säästänyt ostoksiesi avulla."
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#00A77E" }}>
            <AccessTimeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vuokrapäiviä kerätty" secondary={`${props.customerScore.rentDays} päivää`} />
        <Modal
          title="Vuokrapäiviä kerätty"
          text="Kanta-asiakkaana ostoksesi kerryttävät vuokrapäiviä, joiden avulla voit lainata meiltä esimerkiksi polkupyörän."
        />
      </ListItem>
    </List>
  );
}

export default Statics;
