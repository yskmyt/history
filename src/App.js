import React from 'react';
import Home from "./components/home.js"
import About from "./components/about.js"
import User from "./components/user.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
