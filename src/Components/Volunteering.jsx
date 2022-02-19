import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

function Volunteering() {
  return (
    <div className=" frontpage pagesize">
      <div className="container">
      <h1>Volunteering</h1>
      <Card sx={{ display: "flex", maxWidth: 600 , backgroundColor: "rgba(18,18,18,0.5)" }}>
          <Box sx={{ color: "white", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                Coding ninjas
              </Typography>
              <Typography
              marginY={1}
                variant="h6"
                component="div"
              >
                (Ninja Enterpreneur)
              </Typography>
              <Typography variant="subtitle2" >
                  Campus Ambassador (BCE Bhagalpur)
                </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100 , height: 100}}
            image="/asset/cn.jpeg"
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", maxWidth: 600 , backgroundColor: "rgba(18,18,18,0.5)" }}>
          <Box sx={{ color: "white", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4">
                debuggerzz
              </Typography>
              <Typography
              marginY={1}
                variant="h6"
                component="div"
              >
                (Co-founder)
              </Typography>
              <Typography variant="subtitle2" >
                  Official coding club of BCE bhagalpur. 
                </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 100, height:100}}
            image="/asset/debuggerzz.png"
            alt="Live from space album cover"
          />
        </Card>
        
      </div>
    </div>
  );
}

export default Volunteering;
