import React, { useState } from "react";
import BottomNav from "./components/BottomNav";
import TopDrawer from "./components/TopDrawer";
import MainView from "./components/MainView/MainView";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [page, setPage] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="application">
        <TopDrawer />
        <div className="main-area">
          <MainView page={page} />
        </div>
        <BottomNav setPage={setPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
