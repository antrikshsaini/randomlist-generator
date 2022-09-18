import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField, Grid, Card } from "@mui/material";
import ViewList from "./ViewList";

export default function Generator() {
  const [level, setLevel] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [list, setList] = React.useState([]);

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value);
  };
  // random number both inclusive
  const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  };

  const handleGenerate = () => {
    let arr = [];
    let random;
    for (let i = 1; i <= max; i++) {
      arr.push(i);
    }
    // i loop how many times
    // shuffle with any random element max
    const shuffle = (i) => {
      let a = i === max ? -1 : i;
      while (i >= 0) {
        random = getRandomNumber(a + 1, max - 1);
        [arr[i], arr[random]] = [arr[random], arr[i]];
        i--;
      }
      setList(arr);
    };
    // The level depends on number of elements swapped in an array of sorted
    //number from 1 to 10,000.
    switch (level) {
      case 0: {
        // shuffling indexes of Array, first half with second half
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
        shuffle(Math.floor(max / 4) - 1);
        break;
      }
      case 2: {
        shuffle(Math.floor(max / 2) - 1);
        break;
      }
      case 3: {
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
              <Button variant="contained" onClick={handleGenerate}>
                Generate
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item sx={{ maxWidth: "80%", py: 2 }}>
        <ViewList list={list} />
      </Grid>
    </Grid>
  );
}
