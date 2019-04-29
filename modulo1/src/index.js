import React, { Component, Fragment } from "React";
import { render } from "react-dom";

import "./style.scss";
import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Hello World</h1>
        <h2 style={{ color: "#f00" }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
