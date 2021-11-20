import throttle from 'lodash/throttle';
import parse from 'autosuggest-highlight/parse';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

import FormControlLabel from '@mui/material/FormControlLabel';


import Icon from '@mui/material/Icon';
import TextField   from '@mui/material/TextField';

import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState, useRef, useMemo } from 'react';

import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {setSearchText, getTitleSuggestion} from "../store/jobsSlice";

const distances = ['5mi', '10mi'];
const experienceLevels = [
  {name: 'Internship', value: 'INTERN'},
  {name: 'Entry Level', value: 'ENTRY'},
  {name: 'Associate', value: 'ASSOCIATE'},
  {name: 'Mid', value: 'MID'},
  {name: 'Senior', value: 'SENIOR'},
  {name: 'Director', value: 'DIRECTOR'},
  {name: 'Executive', value: 'EXECUTIVE'}];


function FilterMenu(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const loaded = useRef(false);

  const [distance, setDistance] = useState([]);

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(getTitleSuggestion(request.input, callback)).then((data) => {
          setOptions(data.payload)
        });
      }, 200),
    [],
  );

  useEffect(() => {
    let active = true;

  }, [value, inputValue, fetch]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDistance(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <Box
        sx={{ width: 400 }}
      >
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Experience Level</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={true} onChange={handleChange} name="experienceLevel" />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox checked={true} onChange={handleChange} name="experienceLevel" />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox checked={true} onChange={handleChange} name="experienceLevel" />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Box>
    </Drawer>

  );
}

export default FilterMenu;
