import Generator from "./Generator";
import { CardContent, Typography, Card, Grid } from "@mui/material";

function App() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid container justifyContent={"center"} sx={{ bgcolor: "#ffe5b4" }}>
        <Typography>{<h2>Random List Generator</h2>}</Typography>
      </Grid>
      <Grid item container direction="column" spacing={2} maxWidth={"lg"}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>
                This application generate a list of 10,000 unique numbers in
                Random order. Each number in the list is unique and between 1
                and 10,000 (inclusive)
              </Typography>
              <Typography>
                There is an option provided to set the level of Randomness in
                the list.
              </Typography>
              <Typography>
                {
                  <ul>
                    <li>Level 0 : shuffle only one time </li>
                    <li>Level 1 : shuffle 50% of elements n/4 </li>
                    <li>Level 2 : shuffle 100% of elements n/2 </li>
                  </ul>
                }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Generator />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
