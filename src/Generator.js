import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField, Grid } from "@mui/material";
import ViewList from "./ViewList";

export default function Generator() {
  const [level, setLevel] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [list, setList] = React.useState([]);
  const [isCanvas, setIsCanvas] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleMaxChange = (event) => {
    let value = event.target.value;
    setMax(value);
    value > 10000 || value < 1 ? setError(true) : setError(false);
  };

  /** To Generate Random Number with Min and Max Value both Inclusive */
  const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  };

  /** Function to Generate Random Number List according to Levels of Variations  */
  const handleGenerate = (isCanvas) => {
    setIsCanvas(isCanvas);
    let arr = [];
    let random;
    // To initialize List with Sorted numbers from 1 to Max Value
    for (let i = 1; i <= max; i++) {
      arr.push(i);
    }

    /** Function to swap Numbers at 0 to i position with Numbers at Random position between i+1 to Max Value*/
    const shuffle = (i) => {
      let a = i === max ? -1 : i;
      while (i >= 0) {
        random = getRandomNumber(a + 1, max - 1);
        [arr[i], arr[random]] = [arr[random], arr[i]];
        i--;
      }
      setList(arr);
    };

    /** The Level Determines the number of elements swapped in a Sorted List */
    switch (level) {
      case 0: {
        // Swap Numbers present at any Two Random Positions
        // This case is also generating a Unique Random List with a single operation
        let firstRandom = getRandomNumber(0, Math.floor(max / 2) - 1);
        let secondRandom = getRandomNumber(Math.floor(max / 2), max - 1);
        [arr[firstRandom], arr[secondRandom]] = [
          arr[secondRandom],
          arr[firstRandom],
        ];
        setList(arr);
        break;
      }
      case 1: {
        // Shuffling Values present in Array, first n/4 elements with rest Random Indexes
        shuffle(Math.floor(max / 4) - 1);
        break;
      }
      case 2: {
        // Shuffling Values present in Array, first n/2 elements with rest Random Indexes
        shuffle(Math.floor(max / 2) - 1);
        break;
      }
      case 3: {
        // Shuffling all the Values in Array for Maximum Randomness
        shuffle(max);
        break;
      }
      default:
        break;
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      direction="column"
      alignItems={"center"}
    >
      <Grid item>
        <FormControl>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <InputLabel id="select-label">level</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={level}
                label="level"
                onChange={handleChange}
              >
                <MenuItem value={0}>Zero</MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <TextField
                label="Max Value"
                variant="outlined"
                type={"number"}
                onChange={handleMaxChange}
                helperText={
                  error ? "Please enter number between 1 and 10000" : null
                }
                error={error}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => handleGenerate(false)}
                disabled={error}
              >
                Generate List
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => handleGenerate(true)}
                disabled={error}
              >
                Generate Canvas
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item sx={{ maxWidth: "80%", py: 2 }}>
        {/* Generate View of Random List */}
        <ViewList list={list} max={max} isCanvas={isCanvas} />
      </Grid>
    </Grid>
  );
}
