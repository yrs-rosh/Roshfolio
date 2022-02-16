import React, { Component } from "react";
import "./header.css";
import jsicon from "./js.png";
import reacticon from "./react.png";
import pythonicon from "./python.png";
import javaicon from "./java.png";
import giticon from "./git.png";
import vsicon from "./vs.png";

class Header extends Component {
  render() {
    return (
      <div className="frontpage pagesize">
        {/* Animation */}
        <div class="leaf">
          <div>
            <img src={jsicon}></img>
          </div>
          <div>
            <img src={reacticon}></img>
          </div>
          <div>
            <img src={giticon}></img>
          </div>
          <div>
            <img src={javaicon}></img>
          </div>
          <div>
            <img src={pythonicon}></img>
          </div>
          <div>
            <img src={vsicon}></img>
          </div>
        </div>

        {/* Animation  */}
        <div className="container">
          <div className="dp"></div>
          <div className="intro">
            <div>
            <h1 className="greet">Hey, I'm</h1>
              <h1 className="name">Rakesh Kumar</h1>
              <div className="title">
                <div className="title-wrapper">
                  <div className="title-item">Web Developer</div>
                  <div className="title-item">UI/UX Designer</div>
                  <div className="title-item">Content Writer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
