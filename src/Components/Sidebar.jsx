
import React, { Component } from "react";
import Social from "./Social";
import { Link, NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <NavLink exact to="/">Rosh</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/about">About</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/skills">Skills</NavLink>

          
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/projects">Projects</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/volunteering">Volunteering</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/connect">Connect</NavLink>
        </div>

        <Social />
        <div>
          © <a target="_blank" href="https://github.com/yrs-rosh">yrs_rosh</a> 2022
        </div>
      </div>
    );
  }
}

export default Sidebar;
