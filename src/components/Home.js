import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    return this.props.storeData.map((s) => (
      <Item itemData={s.item} priceData={s.price}></Item>
    ));
  }
}

export default Home;
