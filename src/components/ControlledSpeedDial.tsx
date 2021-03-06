import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Badge from '@mui/material/Badge';

const actions = [
  { icon: <ShoppingCartCheckoutIcon />, name: 'Maksa' },
  { icon: <RemoveShoppingCartIcon />, name: 'Tyhjennä' },
];

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface ControlledSpeedDialProps {
  itemAmount: number;
  setItemAmount: (amount: number) => void;
  setCustomerScore: React.Dispatch<React.SetStateAction<customerScore>>;
  setMessageOpen: (state: boolean) => void;
}

function ControlledSpeedDial(props: ControlledSpeedDialProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    props.setItemAmount(0);
  };
  const handlePayment = () => {
    props.setCustomerScore((prevState) => ({
      co2: prevState.co2 + (2 * props.itemAmount),
      water: prevState.water + (5 * props.itemAmount),
      rentDays: prevState.rentDays + props.itemAmount,
    }));
    handleClose();
    props.setMessageOpen(true);
  }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={
        <Badge badgeContent={props.itemAmount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      }
        onClose={() => setOpen(false)}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.name === "Maksa" ? handlePayment : handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default ControlledSpeedDial;
