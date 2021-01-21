import { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Home, Repos } from "./pages";
import { GlobalStyles } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App = () => {
  const [theme, setTheme] = useState(true);
  const selectedTheme: DefaultTheme = theme ? light : dark;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/repos/:login" component={Repos} />

          <Route path="/404" component={() => <h1>404 - Not Found</h1>} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
