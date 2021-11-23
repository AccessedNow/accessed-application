import _ from '@lodash';
import throttle from 'lodash/throttle';
import parse from 'autosuggest-highlight/parse';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import DeleteIcon from '@mui/icons-material/Delete';
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
import {
  searchJobs,
  searchJobLocations,
  setSearchText,
  getTitleSuggestion,
  setFilter,
  setSearchLocation
} from "../store/jobsSlice";
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

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  '& .search-field': {
    border: '1px solid #eee'
  },
  '& .search-job-title': {
    '& fieldset': {
      borderColor: 'white',
      // borderTopRightRadius: 0,
      // borderBottomRightRadius: 0
    }
  },
  '& .search-location': {
    '& fieldset': {
      borderColor: 'white',
      // borderTopLeftRadius: 0,
      // borderBottomLeftRadius: 0
    }
  },

}));


const distances = ['5mi', '10mi'];
const experienceLevels = [
  {name: 'Internship', value: 'INTERN'},
  {name: 'Entry Level', value: 'ENTRY'},
  {name: 'Associate', value: 'ASSOCIATE'},
  {name: 'Mid', value: 'MID'},
  {name: 'Senior', value: 'SENIOR'},
  {name: 'Director', value: 'DIRECTOR'},
  {name: 'Executive', value: 'EXECUTIVE'}];
const employmentTypes = [
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

  const mainTheme = useSelector(selectMainTheme);
  const searchText = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.searchText);
  const filter = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.filter);
  const pagination = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.pagination);
  const [filterOpen, setFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [jobTitles, setJobTitles] = useState([]);
  const [locationText, setLocationText] = useState('');
  const [locations, setLocations] = useState([]);

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

  const fetchJobTitles = useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(getTitleSuggestion(request.input, callback)).then((data) => {
          setJobTitles(data.payload)
        });
      }, 200),
    [],
  );

  const fetchLocations = useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(searchJobLocations(request.input, callback)).then((data) => {
          setLocations(data.payload)
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
  }, [fetchJobTitles]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setFilterOpen(!filterOpen);
  };

  const handleSearchJobTitle = (event, newInputValue) => {
    setSearchText(newInputValue);
    fetchJobTitles({ input: newInputValue }, (results) => {
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

  const handleSearchLocation = (event, newInputValue) => {
    setSearchText(newInputValue);
    fetchLocations({ input: newInputValue }, (results) => {
      let newOptions = [];

      if (newInputValue) {
        newOptions = [value];
      }

      if (results) {
        newOptions = [...newOptions, ...results];
      }

      setLocations(newOptions);

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
    <Root>
      <ThemeProvider theme={mainTheme}>
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full md:flex-row justify-between p-0 mb-10">
            <Paper className="flex flex-row w-full justify-start search-field">
              <Paper className="flex rounded-6 w-full shadow-none">
                <Controller
                  name="searchText"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      freeSolo
                      className="w-full search-job-title"
                      id="field-search-text"
                      getOptionLabel={(option) =>
                        typeof option === 'string' ? option : option.description
                      }
                      options={jobTitles}
                      autoComplete
                      includeInputInList
                      filterSelectedOptions
                      value={filter.searchText}
                      onChange={(event, newValue) => {
                        console.log('onChange', newValue)
                        setJobTitles(newValue ? [newValue, ...jobTitles] : jobTitles);
                        setInputValue(newValue);
                        dispatch(setSearchText(newValue));
                      }}
                      onInputChange={handleSearchJobTitle}
                      renderInput={(params) => (
                        <TextField {...params} label="Search by title" fullWidth
                           InputProps={{
                             startAdornment: <SearchIcon position="start"></SearchIcon>,
                           }}
                        />
                      )}

                    />
                  )}
                />
              </Paper>
              <Divider orientation="vertical" variant="middle" flexItem  />
              <Paper className="flex rounded-6 shadow-none w-full">
                <Controller
                  name="locationText"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      freeSolo
                      className="w-full search-location"
                      id="field-search-text"
                      getOptionLabel={(option) => {
                        let value = '';
                        if(typeof option === 'string') {
                          value = option
                        } else {
                          value = _.values(_.omitBy(_.pickBy(option, _.identity), _.isNumber)).join(', ');
                        }
                        return value;
                      }}
                      options={locations}
                      autoComplete
                      includeInputInList
                      filterSelectedOptions
                      value={locationText}
                      onChange={(event, newValue) => {
                        console.log('onChange', newValue)
                        // setOptions(newValue ? [newValue, ...options] : options);
                        dispatch(setSearchLocation(newValue));
                      }}
                      onInputChange={handleSearchLocation}
                      renderInput={(params) => (
                        <TextField {...params} label="city, state, country" fullWidth
                           InputProps={{
                             startAdornment: <PlaceIcon position="start"></PlaceIcon>,
                           }}
                        />
                      )}

                    />
                  )}
                />
              </Paper>
            </Paper>
            <Button
              size="small"
              variant="contained"
              className="search-btn rounded-6 px-32 ml-5"
              onClick={() => dispatch(searchJobs({}))}>Search</Button>
          </div>
          <div className="flex flex-row items-start justify-start mt-12">
            <Paper className="shadow-none border-0 mr-5">
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
            </Paper>
            <Paper className="shadow-none border-0 mr-5">
              <Controller
                name="employmentType"
                control={control}
                render={({ field }) => (
                  <FormControl size="small" className="flex" >
                    <Select
                      multiple
                      displayEmpty
                      name="employmentType"
                      value={filter.employmentType}
                      onChange={(event, newValue) => {
                        handleFilterChange(event.target.name, event.target.value)
                      }}
                      // input={<OutlinedInput />}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return <em>Job Type</em>;
                        }

                        return <em>Experience Level {selected.length}</em>;
                      }}
                      inputProps={{ 'aria-label': 'Without label' }}
                      className="rounded-20 text-primary text-10"
                    >
                      <MenuItem disabled value="">
                        <em></em>
                      </MenuItem>
                      {employmentTypes.map((item) => (
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
            </Paper>
            <Paper className="shadow-none border-0 mr-5">
              <CustomAutoComplete
                size="small"
                className="flex"
                name="level"
                label="Company"
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
            </Paper>

            <Paper className="shadow-none border-0">
              <Button variant="outlined" size="small" onClick={toggleDrawer(true)}>
                <Typography>All</Typography>
              </Button>
            </Paper>
            <Button variant="text" size="small" className="flex">Reset</Button>
          </div>
        </div>
        <FilterMenu open={filterOpen} toggleDrawer={toggleDrawer}/>
      </div>
      </ThemeProvider>
    </Root>
  );
}

export default JobSearchHeader;
