import React, { Component } from "react";
import "../Style/components.css";

class Header extends Component {
  render() {
    return (
      <div className="frontpage pagesize">
        {/* Animation */}
        <div class="leaf">
          <div>
          <i className="fa-brands fa-html5 fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-python fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-react fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-git-alt fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-js-square fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-css3-alt fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-java fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-node fa-3x"></i>
          </div>
          <div>
          <i className="fa-brands fa-github fa-3x"></i>
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
