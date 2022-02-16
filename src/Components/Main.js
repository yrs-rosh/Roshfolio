import React, { Component } from "react";
import Header from "./Header/Header";

import Aboutme from "./Aboutme/Aboutme";

import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";


export class Main extends Component {
  state = {
      style :["frontpage, pagesize"],
    tabs: [
      "About me",
      "Skills",
      "Certifications",
      "portfolio",
      "Volunteering",
      "Connect with Rosh",
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <Aboutme />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default Main;
