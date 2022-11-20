import React from "react";
import logo from "../commenResource/images/icons/logo-sm.png";

import NavData from "./NavData";
import "../commenResource/js/bootstrap.js";
import NavLink from "./NavLink";

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {NavData.map((item) => {
                return <NavLink link={item} />;
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
