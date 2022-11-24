import React, { Component } from "react";

export default class NavLink extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="/mac/">
          {this.props.link.link ? (
            this.props.link.link
          ) : (
            <img src={this.props.link.img} />
          )}
        </a>
      </li>
    );
  }
}
