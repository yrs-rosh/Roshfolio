import React from "react";
import "../Style/components.css";

function Skills() {
  return (
    <>
      <div id="skills" className="frontpage pagesize">
        <div className="container">
          <h1>Tech I'm familiar with</h1>
          <div>
            <div className="block">
              <div className="type">
              <h4>Programming languages</h4>
              </div>
              <div className="item">
                <img src="./asset/js.png"></img>

                <img src="./asset/java.png"></img>

                <img src="./asset/python.png"></img>
              </div>
            </div>
            <div className="block">
              <div className="type">
              <h4>Web Technologies</h4>
              </div>
              <div className="item">
                <img src="./asset/html.png"></img>

                <img src="./asset/css.png"></img>
                
                <img src="./asset/react.png"></img>

                <img src="./asset/node.png"></img>

                <img src="./asset/bootstrap.png"></img>
              </div>
            </div>
            <div className="block">
              <div className="type">
              <h4>Tools & Services</h4>
              </div>
              <div className="item">
                <img src="./asset/git.png"></img>

                <img src="./asset/github.png"></img>

                <img src="./asset/vs.png"></img>

                <img src="./asset/figma.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
