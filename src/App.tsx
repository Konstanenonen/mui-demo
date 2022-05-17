import React, { useState } from "react";
import BottomNav from "./components/BottomNav/BottomNav";
import TopDrawer from "./components/TopDrawer/TopDrawer";
import MainView from "./components/MainView/MainView";
import { theme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Disclaimer from "./components/Disclaimer";

function App() {
  const [page, setPage] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<any>(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Disclaimer />
        <div className="application">
          <TopDrawer setDarkMode={setDarkMode} setPage={setPage} />
          <div className="main-area">
            <MainView page={page} setPage={setPage} />
          </div>
          <BottomNav page={page} setPage={setPage} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
