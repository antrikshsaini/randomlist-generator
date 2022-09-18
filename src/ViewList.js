import { Typography, Card, Grid } from "@mui/material";
import React from "react";
import Canvas from "./Canvas";

const ViewList = ({ list }) => {
  if (list.length === 0) {
    return (
      <Typography>
        Please select level and enter Max positive Value for list (e.g 1000),
        then press Generate button
      </Typography>
    );
  } else {
    return (
      <>
        <Card sx={{ bgcolor: "#ffe5b4" }}>
          <Grid container display="flex" direction={"row"} id="list-id">
            {list.map((item, index) => (
              <Grid item key={index} sx={{ p: 1 }}>
                {item}
              </Grid>
            ))}
          </Grid>
        </Card>
        <Canvas
          width="1000"
          height="1000"
          style={{ display: "none" }}
          list={list}
        />
      </>
    );
  }
};

export default ViewList;
