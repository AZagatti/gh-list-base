import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { GlobalStyles } from "./styles/global";

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Routes />
  </BrowserRouter>
);

export default App;
