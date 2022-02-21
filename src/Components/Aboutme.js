import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Style/components.css";

function Aboutme() {
  return (
    <div className=" frontpage pagesize">
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
          <Link to="/more">
          <Button sx={{margin:"10px", backgroundColor: "rgba(18,18,18,0.5)" }} variant="contained" href="/notfound">
            know more
          </Button>
          </Link>
          
          <Button sx={{margin:"10px", backgroundColor: "rgba(18,18,18,0.5)" }}  variant="contained" href="./asset/Resume.pdf">
            Resume
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
