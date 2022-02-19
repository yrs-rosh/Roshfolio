import React from "react";
import "./portfolio.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

function Portfolio() {
  return (
    <div className="frontpage pagesize autosize">
    <div className='container'>
        <h1>Projects</h1>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <Card sx={{ maxWidth: 300 }} style={{backgroundColor: "rgba(18,18,18,0.5)"}}>
              <CardMedia component="img" height="160" image="portfolio.png" />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{color: "white", fontWeight:600}} component="div">
                  Roshfolio
                </Typography>
                <Typography variant="body2" color="white">
                  Personal portfolio site made with ReactJS. Nothing much about this, you're already here.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><a href="https://roshroy.netlify.app/" target="_blank">View</a></Button>
                <Button size="small"><a href="https://github.com/yrs-rosh/Roshfolio" target="_blank">Code</a></Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={4}>
            <Card style={{backgroundColor: "rgba(18,18,18,0.5)"}} sx={{ maxWidth: 300 }}>
              <CardMedia component="img" height="160" image="spotify.png" />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{color: "white", fontWeight:600}} component="div">
                  Spotify Web UI
                </Typography>
                <Typography variant="body2" color="white">
                  Made with HTML, CSS and Bootstrap. Tried to make it quite similar to original spotify web UI.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><a href="https://yrs-rosh.github.io/spotify/" target="_blank">View</a>
                </Button>
                <Button size="small"><a href="https://github.com/yrs-rosh/spotify" target="_blank">Code</a></Button>
              </CardActions>
            </Card>
          </Grid>
          

          <Grid item sm={4}>
            <Card style={{backgroundColor: "rgba(18,18,18,0.5)"}} color sx={{ maxWidth: 300 }}>
              <CardMedia component="img" height="160" image="roshtro.png" />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{color: "white", fontWeight:600}} component="div">
                  Roshtro
                </Typography>
                <Typography variant="body2" color="white">
                  A simple Love Calculator made while learning JavaScript. Technologies used : HTML, CSS, JavaScript
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><a href="https://yrs-rosh.github.io/Roshtro/" target="_blank">View</a></Button>
                <Button size="small"><a href="https://github.com/yrs-rosh/Roshtro" target="_blank"> Code</a></Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
        </div>
    </div>
  );
}

export default Portfolio;
