import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./Pages/Search";
import Saved from "./Pages/Saved"
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Books />            
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
