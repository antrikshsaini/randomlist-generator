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

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value);
  };

  /** To Generate Random Number with Min and Max Value both Inclusive */
  const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  };

  /** Function to Generate Random Number List according to Levels  of Variations  */
  const handleGenerate = (isCanvas) => {
    setIsCanvas(isCanvas);
    let arr = [];
    let random;
    // To initial List with Sorted numbers from 1 to Max Value
    for (let i = 1; i <= max; i++) {
      arr.push(i);
    }

    /** Function to shuffle i+1 to Max Random Numbers with 0 to i elements. Where "i" is the breakpoint Index in Array according to level */
    const shuffle = (i) => {
      let a = i === max ? -1 : i;
      while (i >= 0) {
        random = getRandomNumber(a + 1, max - 1);
        [arr[i], arr[random]] = [arr[random], arr[i]];
        i--;
      }
      setList(arr);
    };

    // The level depends on number of elements swapped in a Sorted List
    switch (level) {
      case 0: {
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
        // shuffling indexes of Array, first quarter with rest Random Indexes
        shuffle(Math.floor(max / 4) - 1);
        break;
      }
      case 2: {
        // shuffling indexes of Array, first half with second half Random Indexes
        shuffle(Math.floor(max / 2) - 1);
        break;
      }
      case 3: {
        // shuffling indexes of Array with maximum Ramdoness
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
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => handleGenerate(false)}>
                Generate List
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => handleGenerate(true)}>
                Generate Canvas
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item sx={{ maxWidth: "80%", py: 2 }}>
        <ViewList list={list} max={max} isCanvas={isCanvas} />
      </Grid>
    </Grid>
  );
}
