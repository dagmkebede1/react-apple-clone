import React, { Component } from "react";

export default class InfoLink extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <a href="">Learn more</a>
          </li>
          <li>
            {this.props.order ? <a href="">Order</a> : <a href="">Buy</a>}
          </li>
        </ul>
      </>
    );
  }
}
