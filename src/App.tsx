import React, { useState } from "react";
import BottomNav from "./components/BottomNav/BottomNav";
import TopDrawer from "./components/TopDrawer/TopDrawer";
import MainView from "./components/MainView/MainView";
import { theme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Disclaimer from "./components/Disclaimer";

interface customerScore {
  co2: number;
  water: number;
  rentDays: number;
}

function App() {
  const [page, setPage] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [customerScore, setCustomerScore] = useState<customerScore>({
    co2: 5,
    water: 10,
    rentDays: 1,
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Disclaimer />
        <div className="application">
          <TopDrawer setDarkMode={setDarkMode} setPage={setPage} />
          <div className="main-area">
            <MainView
              setCustomerScore={setCustomerScore}
              customerScore={customerScore}
              page={page}
              setPage={setPage}
            />
          </div>
          <BottomNav page={page} setPage={setPage} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
