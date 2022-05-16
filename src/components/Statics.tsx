import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Co2Icon from '@mui/icons-material/Co2';

function Statics() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Co2Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="CO2 päästöä säästetty" secondary="20 kg" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <InvertColorsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vettä säästetty" secondary="120 L" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vuokratunteja kerätty" secondary="10 tuntia" />
      </ListItem>
    </List>
  );
}

export default Statics;
