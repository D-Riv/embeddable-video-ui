import "./App.css";
import Home from "./components/Home";
import Paper1 from "./components/Paper1";
import Paper2 from "./components/Paper2";
import PageHeader from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PageHeader />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/paper1" component={Paper1} />
          <Route exact path="/paper2" component={Paper2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
