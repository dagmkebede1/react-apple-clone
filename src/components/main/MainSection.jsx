import React, { Component } from "react";
import InfoLink from "./InfoLink";
export default class MainSection extends Component {
  render() {
    let { data } = this.props;
    return (
      <>
        {data.map((item) => {
          return (
            <section className={item.classes}>
              <div className="container">
                {item.status ? <div className="new-alert">New</div> : undefined}

                <div className="title-wraper bold black">{item.title}</div>

                <div className="description-wrapper black">{item.desc}</div>
                {item.price ? (
                  <div className="price-wrapper grey">{item.price}</div>
                ) : undefined}

                <div className="links-wrapper">
                  <InfoLink />
                </div>
              </div>
            </section>
          );
        })}
      </>
    );
  }
}
