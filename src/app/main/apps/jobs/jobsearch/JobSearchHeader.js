import _ from '@lodash';
import throttle from 'lodash/throttle';
import parse from 'autosuggest-highlight/parse';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DirectionsIcon from '@mui/icons-material/Directions';
import Hidden from '@mui/material/Hidden';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import PlaceIcon from '@mui/icons-material/Place';

import SearchIcon from '@mui/icons-material/Search';

import Icon from '@mui/material/Icon';
import TextField   from '@mui/material/TextField';

import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {searchJobs, setSearchText, getTitleSuggestion, setFilter} from "../store/jobsSlice";
import FilterMenu   from './FilterMenu';
import CustomAutoComplete   from '../../../components/CustomAutoComplete';
import {getTalentUser, setUserData} from "../../../../auth/store/userSlice";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const distances = ['5mi', '10mi'];
const experienceLevels = [
  {name: 'Internship', value: 'INTERN'},
  {name: 'Entry Level', value: 'ENTRY'},
  {name: 'Associate', value: 'ASSOCIATE'},
  {name: 'Mid', value: 'MID'},
  {name: 'Senior', value: 'SENIOR'},
  {name: 'Director', value: 'DIRECTOR'},
  {name: 'Executive', value: 'EXECUTIVE'}];
const jobTypes = [
    {name: 'Full Time', value: 'FULLTIME'},
    {name: 'Part Time', value: 'PARTTIME'},
    {name: 'Contract', value: 'FREELANCE'},
    {name: 'Temporary', value: 'TEMPORARY'},
    {name: 'Volunteer', value: 'VOLUNTEER'},
    {name: 'Internship', value: 'INTERN'},
    {name: 'Other', value: ''}];


function JobSearchHeader(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const experienceLevels = [
    {name: 'Internship', value: 'INTERN'},
    {name: 'Entry Level', value: 'ENTRY'},
    {name: 'Associate', value: 'ASSOCIATE'},
    {name: 'Mid', value: 'MID'},
    {name: 'Senior', value: 'SENIOR'},
    {name: 'Director', value: 'DIRECTOR'},
    {name: 'Executive', value: 'EXECUTIVE'}];
  const searchText = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.searchText);
  const filter = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.filter);
  const pagination = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.pagination);
  const [filterOpen, setFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const loaded = useRef(false)

  const defaultValues = _.merge(
    {},
    filter
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues
  });

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


  //   if (inputValue === '') {
  //     setOptions(value ? [value] : []);
  //     return undefined;
  //   }
  //
  //   fetch({ input: inputValue }, (results) => {
  //     if (active) {
  //       let newOptions = [];
  //
  //       if (value) {
  //         newOptions = [value];
  //       }
  //
  //       if (results) {
  //         newOptions = [...newOptions, ...results];
  //       }
  //
  //       setOptions(newOptions);
  //     }
  // });

    return () => {
      active = false;
    };
  }, [fetch]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setFilterOpen(!filterOpen);
  };

  const handleSearchText = (event, newInputValue) => {
    setSearchText(newInputValue);
    fetch({ input: newInputValue }, (results) => {
        let newOptions = [];

        if (newInputValue) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);

      });
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDistance(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function handleFilterChange(name, value) {
    const updateFilter = _.setIn(
      filter,
      name,
      value
    );

    dispatch(
      setFilter(
        updateFilter
      )
    );
    dispatch(searchJobs({query: searchText, filter: updateFilter, pagination: pagination}));
  }

  const handleDistanceChange = (event) => {
    const {
      target: { value },
    } = event;
    setDistance(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleExperienceLevelChange = (event) => {
    const {
      target: { value },
    } = event;
    setExperienceLevel(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full md:flex-row justify-between p-0 mb-10">
          <div className="flex flex-row w-full justify-start">
            <Controller
              name="searchText"
              className="flex w-full"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  freeSolo
                  className="w-full"
                  id="field-search-text"
                  getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.description
                  }
                  options={options}
                  autoComplete
                  includeInputInList
                  filterSelectedOptions
                  value={filter.searchText}
                  onChange={(event, newValue) => {
                    console.log('onChange', newValue)
                    setOptions(newValue ? [newValue, ...options] : options);
                    setInputValue(newValue);
                    dispatch(setSearchText(newValue));
                  }}
                  onInputChange={handleSearchText}
                  renderInput={(params) => (
                    <TextField {...params} label="Search by title" fullWidth />
                  )}

                />
              )}
            />
            <Controller
              name="searchText"
              className="flex w-full"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  freeSolo
                  className="w-full"
                  id="field-search-text"
                  getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.description
                  }
                  options={options}
                  autoComplete
                  includeInputInList
                  filterSelectedOptions
                  value={filter.searchText}
                  onChange={(event, newValue) => {
                    console.log('onChange', newValue)
                    setOptions(newValue ? [newValue, ...options] : options);
                    setInputValue(newValue);
                    dispatch(setSearchText(newValue));
                  }}
                  onInputChange={handleSearchText}
                  renderInput={(params) => (
                    <TextField {...params} label="Search by title" fullWidth />
                  )}

                />
              )}
            />
          </div>
          <Button
            size="small"
            variant="contained"
            className="search-btn rounded-6 px-32 ml-5"
            onClick={() => dispatch(searchJobs({}))}>Search</Button>
        </div>
        <div className="flex flex-row items-start justify-start mt-12 px-12">
          <Controller
            name="distance"
            control={control}
            render={({ field }) => (
              <FormControl size="small" className="flex" >
                <Select
                  multiple
                  displayEmpty
                  name="distance"
                  value={filter.distance}
                  onChange={(event, newValue) => {
                    handleFilterChange(event.target.name, event.target.value)
                  }}
                  // input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Distance</em>;
                    }

                    return <em>Distance {selected.length}</em>;
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="rounded-20 text-primary text-10"
                >
                  <MenuItem disabled value="">
                    <em></em>
                  </MenuItem>
                  {distances.map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="level"
            control={control}
            render={({ field }) => (
              <FormControl size="small" className="flex" >
                <Select
                  multiple
                  displayEmpty
                  name="level"
                  value={filter.level}
                  onChange={(event, newValue) => {
                    handleFilterChange(event.target.name, event.target.value)
                  }}
                  // input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Experience Level</em>;
                    }

                    return <em>Experience Level {selected.length}</em>;
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="rounded-20 text-primary text-10"
                >
                  <MenuItem disabled value="">
                    <em></em>
                  </MenuItem>
                  {experienceLevels.map((item) => (
                    <MenuItem
                      key={item.value}
                      value={item.value}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />

              <CustomAutoComplete
                size="small"
                className="flex"
                name="level"
                value={filter.level}
                isOptionEqualToValue={(option, value) => {
                  return option.name === value
                }}
                getOptionLabel = {(option) => {
                  return option.name
                }}
                options={[
                  {
                    name: 'good first issue',
                    color: '#7057ff',
                    description: 'Good for newcomers',
                  },
                  {
                    name: 'help wanted',
                    color: '#008672',
                    description: 'Extra attention is needed',
                  }]}
                onUpdate={handleFilterChange}>

              </CustomAutoComplete>

          <Button variant="outlined" size="small" className="flex rounded-20" onClick={toggleDrawer(true)}>All filters</Button>
          <Button variant="text" size="small" className="flex">Reset</Button>
        </div>
      </div>
      <FilterMenu open={filterOpen} toggleDrawer={toggleDrawer}/>
    </div>
  );
}

export default JobSearchHeader;
