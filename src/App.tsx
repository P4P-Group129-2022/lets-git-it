import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import Routes from "./routes";
import { ScenarioContextProvider } from "./contexts/ScenarioContextProvider";
import { NotificationContextProvider } from "./contexts/NotificationContextProvider";
import { MessageContextProvider } from "./contexts/MessageContextProvider";

function App() {
  return (
    <ScenarioContextProvider>
      <MessageContextProvider>
        <NotificationContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </NotificationContextProvider>
      </MessageContextProvider>
    </ScenarioContextProvider>
  );
}

export default App;
