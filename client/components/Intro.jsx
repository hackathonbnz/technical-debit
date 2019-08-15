import React from "react";

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h1>Virtual</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            commodi itaque, explicabo laboriosam at sit quam officiis quod ab
            porro quibusdam magni nesciunt nostrum sed earum fugit, aliquam
            quidem aliquid?
          </p>
        </div>
        <div>
          <button>Create Card</button>
          <button>Dismiss</button>
        </div>
      </div>
    );
  }
}

export default Intro;
