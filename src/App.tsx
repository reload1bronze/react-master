import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tv from "./Tv";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
