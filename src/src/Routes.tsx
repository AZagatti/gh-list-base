import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Repos } from "./pages";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repos/:username" component={Repos} />

      <Route path="/404" component={() => <h1>404 - Not Found</h1>} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
