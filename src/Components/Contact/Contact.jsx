import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia, Container, Grid } from "@mui/material";
import Social from "../Social";

function Contact() {
  return (
    <div className=" frontpage pagesize">
      <div className="container">
        <h1>Keep in touch</h1>
        <Grid item>
          <Card
            style={{ backgroundColor: "rgba(18,18,18,0.5)", color:"white" }}
            sx={{ maxWidth: 600 }}
          >
            <CardContent align="left">
            <Typography variant="h6" >
                  If you like my work and wanna peer coding or collaborate on projects, please ping me anywhere listed below. My inbox is always open🥰
                </Typography>
              <Typography
                gutter
                variant="h5"
                style={{  fontWeight: 600, marginTop:20 }}
                component="div"
              >
                Phone no.
              </Typography>
              <Typography gutterBottom variant="body1" paragraph>
                <a href="tel:+91 8252141856">+91 82521 41856</a>
              </Typography>
              <Typography
                gutter
                variant="h5"
                style={{ color: "white", fontWeight: 600 }}
                component="div"
              >
                Email
              </Typography>
              <Typography gutterBottom variant="body1" paragraph>
                <a href="mailto:itsroyrakesh.com" target="_blank">
                  itsroyrakesh@gmail.com
                </a>
              </Typography>
              <Typography
                gutter
                variant="h5"
                style={{  fontWeight: 600 }}
                component="div"
              >
                Location
              </Typography>
              <Typography gutterBottom variant="body1" color="white" paragraph>
                Patna, Bihar, India
              </Typography>
              <Social />
            </CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
