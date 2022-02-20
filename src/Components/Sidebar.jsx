
import React, { Component } from "react";
import Social from "./Social";
import { Link, NavLink } from "react-router-dom";
import { Book, DeveloperMode, Person, Send, VolunteerActivismRounded } from "@mui/icons-material";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <NavLink exact to="/">Rosh</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/about"><Person/> About</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/skills"><Book/> Skills</NavLink>

          
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/projects"><DeveloperMode/> Projects</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/volunteering"><VolunteerActivismRounded/> Volunteering</NavLink>
        </div>
        <div className="sidelinks">
        <NavLink activeClassName="active" to="/connect"><Send/> Connect</NavLink>
        </div>

        <Social />
        <div>
          © <a target="_blank" href="https://github.com/yrs-rosh">yrs_rosh</a> {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}

export default Sidebar;
