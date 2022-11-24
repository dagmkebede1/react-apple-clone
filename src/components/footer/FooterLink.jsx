import React, { Component } from "react";

export default class FooterItems extends Component {
  render() {
    return (
      <>
        {this.props.data.map((item) => {
          return (
            <>
              <h3>{item.h3.title}</h3>
              <ul>
                {item.h3.links.map((link) => {
                  return (
                    <li>
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </>
    );
  }
}
