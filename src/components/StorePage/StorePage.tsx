import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import ControlledSpeedDial from "../ControlledSpeedDial";
import ReusableCard from "../ReusableCard";
import ShopDrawer from "../ShopDrawer";
import "./store.css";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface StorePageProps {
  setPage: (page: number) => void;
  setCustomerScore: React.Dispatch<React.SetStateAction<customerScore>>;
}

function StorePage(props: StorePageProps) {
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [messageOpen, setMessageOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={messageOpen}
      >
        <Alert severity="success">
          <AlertTitle>Maksutapahtuma hyväksytty</AlertTitle>
          <strong>Kiitos ostoksestasi!</strong> - Katso tilastot sivulta kuinka
          paljon olet säästänyt luonnovaroja ja kerryttänyt vuokrapäiviä.
          <Divider />
          <Button
            sx={{ color: "white", backgroundColor: "#00A77E", mt: 1 }}
            onClick={() => setMessageOpen(false)}
          >
            Sulje
          </Button>
        </Alert>
      </Backdrop>
      <h1>Verkkokauppa</h1>
      <ShopDrawer />
      <div className="grid">
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
        <ReusableCard
          imageHeight={125}
          handleClick={() => setItemAmount((prevState) => prevState + 1)}
          imageName="bike"
          title="Pyörä"
          buttonText="Osta"
          text="100 €"
        />
      </div>
      <Pagination sx={{ mb: 5 }} count={10} color="primary" />
      <div className="bottom-right">
        <ControlledSpeedDial
          setCustomerScore={props.setCustomerScore}
          setItemAmount={setItemAmount}
          itemAmount={itemAmount}
          setMessageOpen={setMessageOpen}
        />
      </div>
    </>
  );
}

export default StorePage;
