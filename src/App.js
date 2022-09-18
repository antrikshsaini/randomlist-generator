import Generator from "./Generator";
import { CardContent, Typography, Card, Grid } from "@mui/material";

function App() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid container justifyContent={"center"} sx={{ bgcolor: "#ffe5b4" }}>
        {<h2>Random List Generator</h2>}
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
              <Grid>
                {
                  <ul>
                    <li>Level 0 : shuffle only one time </li>
                    <li>Level 1 : shuffle 25% of elements n/4 </li>
                    <li>Level 2 : shuffle 50% of elements n/2 </li>
                    <li>Level 3 : shuffle 100% of elements n </li>
                  </ul>
                }
              </Grid>
              <Typography>
                Note : If Generating Canvas for huge Max Value like 10,000 , It
                will take a bit longer to display. For Better view of Canvas use
                Max Value 1000 and any level.
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
