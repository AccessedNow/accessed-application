import _ from '@lodash';
import throttle from 'lodash/throttle';
import parse from 'autosuggest-highlight/parse';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import TextField   from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {setSearchText, setFilter, getTitleSuggestion, searchJobLocations} from "../store/jobsSlice";
import {searchJobFunctions} from "../../../../store/accessed/commonSlice";

import CompanyFilter from "../../../components/CompanyFilter";


const Container = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  '& .MuiListItem-root': {
    display: 'inline-flex',
    width: '50%',
  },

}));


let distances = ['5mi', '10mi'];
let experienceLevels = [
  {name: 'Internship', value: 'INTERN', checked: false},
  {name: 'Entry Level', value: 'ENTRY', checked: false},
  {name: 'Associate', value: 'ASSOCIATE', checked: false},
  {name: 'Mid', value: 'MID', checked: false},
  {name: 'Senior', value: 'SENIOR', checked: false},
  {name: 'Director', value: 'DIRECTOR', checked: false},
  {name: 'Executive', value: 'EXECUTIVE', checked: false}];
let employmentTypes = [
  {name: 'Full Time', value: 'FULLTIME', checked: false},
  {name: 'Part Time', value: 'PARTTIME', checked: false},
  {name: 'Contract', value: 'FREELANCE', checked: false},
  {name: 'Temporary', value: 'TEMPORARY', checked: false},
  {name: 'Volunteer', value: 'VOLUNTEER', checked: false},
  {name: 'Internship', value: 'INTERN', checked: false},
  {name: 'Other', value: '', checked: false}];
let remotes = [
  {name: 'On-site', value: 'ONSITE', checked: false},
  {name: 'Remote', value: 'REMOTE', checked: false},
  {name: 'Both', value: 'BOTH', checked: false}];

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
]

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li[data-focus="true"]': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function FilterMenu(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const filter = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.filter);
  const [allowRemote, setAllowRemote] = useState(filter.allowRemote);
  experienceLevels = _.reduce(experienceLevels, function(res, item){
    item.checked=_.includes(filter.level, item.value)?true:false;
    res.push(item);
    return res;
  }, []);

  employmentTypes = _.reduce(employmentTypes, function(res, item){
    item.checked=_.includes(filter.employmentType, item.value)?true:false;
    res.push(item);
    return res;
  }, []);

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [company, setCompany] = useState([]);
  const loaded = useRef(false);
  const [distance, setDistance] = useState([]);
  const [checked, setChecked] = useState([]);

  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    dispatch(searchJobFunctions())
  }, [value, inputValue, fetch]);

  const fetchJobFunctions = useMemo(
    () =>
      throttle((request, callback) => {
        dispatch(searchJobFunctions(request.input, callback)).then((data) => {
          setJobFunctions(data.payload);
        });
      }, 200),
    [],
  );

  const handleChange = (event, selected) => {
    setExperienceLevel(event.target.checked);

    let field = _.clone(filter[event.target.name]);
    const data = selected?_.concat(field, [event.target.value]):_.pull(field, event.target.value);
    const updateFilter = _.setIn(
      filter,
      event.target.name,
      data
    );
    dispatch(
      setFilter(
        updateFilter
      )
    );
  };

  const handleToggle = (name, item) => () => {
    let data = _.clone(filter[name]);
    const currentIndex = _.indexOf(data, item.value);

    if (currentIndex === -1) {
      data.push(item.value);
    } else {
      data.splice(currentIndex, 1);
    }

    const updateFilter = _.setIn(
      filter,
      name,
      data
    );
    dispatch(
      setFilter(
        updateFilter
      )
    );
  };

  const handleRemoteChange = (event) => {
    const updateFilter = _.setIn(
      filter,
      event.target.name,
      event.target.checked
    );
    dispatch(
      setFilter(
        updateFilter
      )
    );
  };

  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <Container>
        <Box sx={{ width: 500 }}>
          <Grid spacing={2} className="p-20">
            <Grid item xs={12}>
              <FormControl sx={{ m: 0 }} component="div" variant="standard">
                <div className="flex">
                  <Typography className="text-14 font-700">Experience Level</Typography>
                </div>
                <FormGroup>
                  <Grid container spacing={0}>
                  {experienceLevels.map((item, index) => (
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox checked={item.checked} onChange={handleChange} name="level" />
                        }
                        label={item.name}
                        value={item.value}
                      />
                    </Grid>
                  ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </Grid>
            <Divider className="w-full my-20" />
            <Grid item xs={12}>
              <FormControl sx={{ m: 0 }} component="div" variant="standard">
                <div className="flex">
                  <Typography className="text-14 font-700">Empoyment Type</Typography>
                </div>
                <FormGroup>
                  <Grid container spacing={0}>
                    {employmentTypes.map((item, index) => (
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox checked={item.checked} onChange={handleChange} name="employmentType" />
                          }
                          label={item.name}
                          value={item.value}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormGroup>
              </FormControl>
            </Grid>
            <Divider className="w-full my-20" />
            <Grid item xs={12}>
              <FormControl sx={{ m: 0 }} component="div" variant="standard" className="flex flex-row items-center justify-between">
                <div className="flex">
                  <Typography className="text-14 font-700">On-site / Remote</Typography>
                </div>
                <div className="flex">
                  <Switch
                    name="allowRemote"
                    checked={allowRemote}
                    onChange={handleRemoteChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
              </FormControl>
            </Grid>


            <Grid item xs={12}>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {experienceLevels.map((item) => {
                  const labelId = `checkbox-list-label-${item.value}`;

                  return (
                    <ListItem
                      key={item.value}
                      disablePadding
                    >
                      <ListItemButton role={undefined} onClick={handleToggle('level', item)} className="py-0">
                        <ListItemIcon>
                          <Checkbox
                            name="level"
                            size="large"
                            edge="start"
                            checked={_.includes(filter.level, item.value)}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.name} className="text-14" />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
                <ListItem
                  key={value}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Autocomplete
                        sx={{
                          '& input': {
                            width: 200,
                            bgcolor: 'background.paper',
                            color: (theme) =>
                              theme.palette.getContrastText(theme.palette.background.paper),
                          },
                        }}
                        id="custom-input-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <div ref={params.InputProps.ref}>
                            <input type="text" {...params.inputProps} />
                          </div>
                        )}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>

            </Grid>
          </Grid>

        </Box>
      </Container>

    </Drawer>

  );
}

export default FilterMenu;
