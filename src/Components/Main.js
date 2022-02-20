import React, { Component } from "react";
import Header from "./Header";

import Aboutme from "./Aboutme";

import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Volunteering from "./Volunteering";


export class Main extends Component {

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
