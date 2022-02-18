
import React, { Component } from "react";
import Social from "./Social";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <a href="/">/Rosh</a>
        </div>
        <div className="sidelinks">
          <a href="/error">About me</a>{" "}
        </div>
        <div className="sidelinks">
          <a href="#">Skills</a>{" "}
        </div>
        <div className="sidelinks">
          <a href="#">Projects</a>{" "}
        </div>
        <div className="sidelinks">
          <a href="#">Volunteering</a>{" "}
        </div>
        <div className="sidelinks">
          <a href="#">Keep in touch</a>{" "}
        </div>

        <Social />
        <div>
          © <a href="#">yrs_rosh</a> 2022
        </div>
      </div>
    );
  }
}

export default Sidebar;
