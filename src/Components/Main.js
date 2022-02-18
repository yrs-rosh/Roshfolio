import React, { Component } from "react";
import Header from "./Header/Header";

import Aboutme from "./Aboutme/Aboutme";

import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Volunteering from "./Volunteering/Volunteering";


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
        <Volunteering />
        <Contact />
      </div>
    );
  }
}

export default Main;
