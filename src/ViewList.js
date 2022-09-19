import { Typography, Card, Grid } from "@mui/material";
import React from "react";
import Canvas from "./Canvas";

const ViewList = ({ list, max, isCanvas }) => {
  if (list.length === 0) {
    return (
      <Typography>
        Please select level and enter Max positive Value for list (e.g 1000),
        then press Generate button
      </Typography>
    );
  } else {
    /** Show simple List */
    if (!isCanvas) {
      return (
        <Card sx={{ bgcolor: "#ffe5b4" }}>
          <Grid container display="flex" direction={"row"}>
            {list.map((item, index) => (
              <Grid item key={index} sx={{ p: 1 }}>
                {item}
              </Grid>
            ))}
          </Grid>
        </Card>
      );
    } else {
      /** Show Canvas */
      /** Canvas component generate pattern in Dynamic sizes which cannot fit in normal size screen, therefore an Image is captured
       *  in the component to show in a specified div
       */
      return (
        <>
          <Grid id="canvas-id" width={1000} height={1000}>
            {/* Canvas container to show huge canvas like 10,000 by 10,000 */}
          </Grid>
          <Canvas
            width={max}
            height={max}
            style={{ display: "none" }}
            list={list}
          />
        </>
      );
    }
  }
};

export default ViewList;
