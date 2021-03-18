import React from 'react';
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";

import NavBar from "./components/NavBar"

export default () => {

  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </div>
  );
}