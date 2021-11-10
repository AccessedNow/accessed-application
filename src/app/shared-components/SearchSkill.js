import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import throttle from 'lodash/throttle';
import {searchSkills} from "../main/apps/jobs/store/jobsSlice";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        // autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    [],
  );

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    dispatch(searchSkills(inputValue)).then(function({payload}){
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (payload) {
          setOptions(payload);
        }

        // setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);



  console.log('value', value)

  return (
      <Autocomplete
        multiple
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        filterSelectedOptions
        getOptionLabel={(option) => option.name}
        id="controllable-states-demo"
        options={options}
        // renderInput={(params) => <TextField {...params} label="Controllable" />}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
  );
}
