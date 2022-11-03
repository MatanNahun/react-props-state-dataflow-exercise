import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        {this.props.itemData}: ${this.props.priceData}
      </div>
    );
  }
}

export default Item;
