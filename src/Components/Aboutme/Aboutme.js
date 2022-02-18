import { Button } from "@mui/material";
import React from "react";
import "./aboutme.css";

function Aboutme() {
  return (
    <div className=" frontpage">
      <div className="container">
        <h1>About Me</h1>
        <div className="text">
          <p>
            I am a 3rd year undergraduate student, Front-end Web developer and
            designer. Loves to learn and explore new technologies and share the
            knowledge back to the community. I love to talk about technologies
            and open-source projects. Currently I'm learning Reactjs and looking
            for opportunity as a react dev.{" "}
          </p>
          <Button variant="contained" href="/notfound">
            know more about me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
