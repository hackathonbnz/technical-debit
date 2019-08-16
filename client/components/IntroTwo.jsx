import React from "react";

import { Link } from "react-router-dom";

class IntroTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>User Cases</h1>
        </div>
        <div>
          <Link to="/IntroThree">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              commodi itaque, explicabo laboriosam at sit quam officiis quod ab
              porro quibusdam magni nesciunt nostrum sed earum fugit, aliquam
              quidem aliquid?
            </p>
          </Link>
        </div>
        <div>
          <button
            onClick={e => {
              window.location = "/createCard";
            }}
          >
            Create Card
          </button>
          <button>Dismiss</button>
        </div>
      </div>
    );
  }
}

export default IntroTwo;
