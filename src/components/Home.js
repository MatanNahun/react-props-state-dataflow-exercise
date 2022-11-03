import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    return this.props.shouldDiscount
      ? this.props.storeData.map((s) => (
          <Item itemData={s.item} priceData={s.price}></Item>
        ))
      : this.props.storeData.map((s) => (
          <Item itemData={s.item} priceData={s.price * (1 - s.discount)}></Item>
        ));
  }
}

export default Home;
