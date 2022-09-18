import { Card, Grid, Typography } from "@mui/material";
import React from "react";

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
      <Card>
        <Grid container display="flex" direction={"row"}>
          {list.map((item, index) => (
            <Grid item key={index} sx={{ p: 1 }}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Card>
    );
  }
};

export default ViewList;
