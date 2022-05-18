import { Alert } from "@mui/material";
import React from "react";

function Disclaimer() {
  return (
    <div className="disclaimer">
      <Alert severity="warning">
        Tämä on puhelinsovellus, pienennä selaimesi ikkunan leveyttä parhaimman
        käytettävyyden mahdollistamiseksi. Kun tämä teksti ja sovelluksen
        kehykset katoavat, ikkunasi on tarpeeksi pieni ideaaliin käyttöön.
      </Alert>
    </div>
  );
}

export default Disclaimer;
