import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import CardForm from "./CardForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/form" component={CardForm} />
        </Router>
        <h1>Amazing bank web app</h1>
      </React.Fragment>
    );
  }
}

export default App;
