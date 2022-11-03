import React, { Component } from "react";

class Hudini extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    let divMassage = this.state.show ? "Now you see me" : "Now you don’t";
    return <div>{divMassage}</div>;
  }
}

export default Hudini;
