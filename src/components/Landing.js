import React, { Component } from "react";

class Landing extends Component {
  render() {
    let hottest = this.props.storeData.filter((s) => s.hottest);
    console.log(hottest);
    return (
      <div>
        <div> Welcome, {this.props.user} </div>
        <div> The hottest item is {hottest[0].item} </div>
      </div>
    );
  }
}

export default Landing;
