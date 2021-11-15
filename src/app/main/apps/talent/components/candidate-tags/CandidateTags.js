import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import throttle from 'lodash/throttle';

const filter = createFilterOptions();
import {getCompanyLabels} from "../../store/labelsSlice";
import {getCandidateNotes, addCandidateNote} from "../../store/candidateSlice";


const top100Films = [
  { name: 'The Shawshank Redemption', year: 1994 },
  { name: 'The Godfather', year: 1972 },
  { name: 'The Godfather: Part II', year: 1974 },
  { name: 'The Dark Knight', year: 2008 },
  { name: '12 Angry Men', year: 1957 },
  { name: "Schindler's List", year: 1993 },
  { name: 'Pulp Fiction', year: 1994 },
  {
    name: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { name: 'The Good, the Bad and the Ugly', year: 1966 },
  { name: 'Fight Club', year: 1999 },
  {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    name: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { name: 'Forrest Gump', year: 1994 },
  { name: 'Inception', year: 2010 },
  {
    name: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { name: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { name: 'Goodfellas', year: 1990 },
  { name: 'The Matrix', year: 1999 },
  { name: 'Seven Samurai', year: 1954 },
  {
    name: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  }
];


function CandidateTags(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const user = useSelector(({ auth }) => auth.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tags, setTags] = useState(props.tags?props.tags:[]);

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  const defaultValue = []

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(getCompanyLabels({query: request.input, type: 'TAG'})).then( (response) => {
          callback(response.payload)
        });
      }, 200),
    [],
  );

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch, dispatch, routeParams]);

  function onInputChange(ev) {
    setMessage(ev.target.value);
  }

  function handleChange(ev, newValue) {
    if (typeof newValue === 'string') {
      setValue({
        name: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setValue({
        isNew: true,
        name: newValue.inputValue,
      });
    } else {
      setValue(newValue);
    }
  }

  const handleDelete = (idx) => {
    console.info('You clicked the delete icon.');
  };


  function onMessageSubmit(ev) {
    ev.preventDefault();
    if (message === '') {
      return;
    }

    dispatch(
      addCandidateNote({
        message,
        subject: props.id
      })
    ).then((data) => {
      setMessage('');

      data.payload.createdBy = user.data;
      let temp = _.setIn(
        notes,
        'content',
        notes.content.concat(data.payload)
      );

      setNotes(
        temp
      );
    });
  }

  console.log('tags', props.tags)
  return (
    <div>
      <Stack direction="row" spacing={1}>
        {tags.map((tag, idx) => (
        <Chip size="small" label={tag.name} onDelete={handleDelete(idx)} />
        ))}
      </Stack>
      <Autocomplete
        freeSolo
        value={value}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        defaultValue={props.tags}
        options={options}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}

        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="+ Add Tag" variant="standard" />
        )}
      />
    </div>
  );
}

export default CandidateTags;
