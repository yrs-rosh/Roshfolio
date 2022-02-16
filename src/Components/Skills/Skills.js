import React from "react";
import "./skills.css";
import jsicon from "./js.png";
import reacticon from "./react.png";
import htmlicon from "./html.png";
import nodeicon from "./node.png";
import bootsicon from "./bootstrap.png";
import cssicon from "./css.png";
import pyicon from "./python.png";
import javaicon from "./java.png";
import githubicon from "./github.png";
import vsicon from "./vs.png";
import giticon from "./git.png";
import figmaicon from "./figma.png";

function Skills() {
  return (
    <>
      <div className="frontpage pagesize">
        <div className="container">
          <h1>Tech I'm familiar with</h1>
          <div>
            <div className="block">
              <div className="type">
              <h4>Programming languages</h4>
              </div>
              <div className="item">
                <img src={jsicon}></img>

                <img src={javaicon}></img>

                <img src={pyicon}></img>
              </div>
            </div>
            <div className="block">
              <div className="type">
              <h4>Web Technologies</h4>
              </div>
              <div className="item">
                <img src={htmlicon}></img>

                <img src={cssicon}></img>

                <img src={bootsicon}></img>

                <img src={reacticon}></img>

                <img src={nodeicon}></img>
              </div>
            </div>
            <div className="block">
              <div className="type">
              <h4>Tools & Services</h4>
              </div>
              <div className="item">
                <img src={giticon}></img>

                <img src={githubicon}></img>

                <img src={vsicon}></img>

                <img src={figmaicon}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
