import React from "react";
import Intro from "./Intro";
import IntroTwo from "./IntroTwo";
import IntroThree from "./IntroThree";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Intro} />
          <Route exact path="/IntroTwo" component={IntroTwo} />
          <Route path="/IntroThree" component={IntroThree} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
