import { Button } from "@mui/material";
import React from "react";
import BenefitsPage from "../BenefitsPage";
import FrontPage from "../FrontPage";
import ProfilePage from "../ProfilePage";
import StatPage from "../StatPage";
import StorePage from "../StorePage/StorePage";
import "./main.css";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

interface MainViewProps {
  customerScore: customerScore;
  setCustomerScore: React.Dispatch<React.SetStateAction<customerScore>>;
  page: number;
  setPage: (page: number) => void;
}

function MainView(props: MainViewProps) {
  function currentPage(page: number) {
    switch (page) {
      case 0:
        return (
          <FrontPage
            customerScore={props.customerScore}
            setPage={props.setPage}
          />
        );
      case 1:
        return (
          <StorePage
            setCustomerScore={props.setCustomerScore}
            setPage={props.setPage}
          />
        );
      case 2:
        return <BenefitsPage setPage={props.setPage} />;
      case 3:
        return <StatPage customerScore={props.customerScore} />;
      case 4:
        return <ProfilePage />;
      case 5:
        return <h1>Asetukset</h1>;
      default:
        return <h1>404 Sivua ei löytynyt</h1>;
    }
  }

  return <div className="main-items">{currentPage(props.page)}</div>;
}

export default MainView;
