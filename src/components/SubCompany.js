import React, { Component } from "react";

class SubCompany extends Component {
  render() {
    return (
      <div>
        {this.props.name} {this.props.revenue}
      </div>
    );
  }
}

export default SubCompany;
