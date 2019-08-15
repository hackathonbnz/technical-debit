import React from "react";
import Intro from "./Intro";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h1>Amazing bank web app</h1>
        <Intro />
      </React.Fragment>
    );
  }
}

export default App;
