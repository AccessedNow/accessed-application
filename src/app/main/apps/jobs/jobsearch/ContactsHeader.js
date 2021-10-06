import * as React from 'react';
import { styled } from '@mui/material/styles';

import Autocomplete from '@mui/material/Autocomplete';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import PlaceIcon from '@mui/icons-material/Place';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { getTitleSuggestion } from '../store/jobsSlice';


const StyledSearchBar = styled('div')(({ theme }) => ({

  '& .MuiAutocomplete-root': {
    '& fieldset': {
      border: 'none'
    },
  },
  '& .MuiAutocomplete-popper': {
    // backgroundColor: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20
  }
}));

function ContactsHeader(props) {
  const dispatch = useDispatch();
  const mainTheme = useSelector(selectMainTheme);
  const [age, setAge] = React.useState('');

  const [suggestion, setSuggestion] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTitleChange = (event) => {
    dispatch(getTitleSuggestion(event.target.value)).then((response) => {
      let data = _.reduce(response.payload, function(res, item, i){res.push({id: i, label: item}); return res;}, []);
      setSuggestion(data)
    });
  }

  return (
    <StyledSearchBar>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-shrink items-center">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => {
                props.pageLayout.current.toggleLeftSidebar();
              }}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>

          <div className="flex items-center">
            {/*<Icon*/}
              {/*component={motion.span}*/}
              {/*initial={{ scale: 0 }}*/}
              {/*animate={{ scale: 1, transition: { delay: 0.2 } }}*/}
              {/*className="text-24 md:text-32"*/}
            {/*>*/}
              {/*filter_alt*/}
            {/*</Icon>*/}
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start mt-20">
          <ThemeProvider theme={mainTheme}>
            <Paper component="div" className="search flex sm:flex-col lg:flex-row py-0 rounded-8 w-full">
              <div className="flex flex-1 flex-col">
                <div className="flex">
                  <div className="flex">
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    {/*<InputBase*/}
                      {/*sx={{ ml: 1, flex: 1 }}*/}
                      {/*placeholder="Search by title"*/}
                      {/*inputProps={{ 'aria-label': 'Search by title' }}*/}
                    {/*/>*/}
                    <Autocomplete
                      freeSolo
                      disablePortal
                      id="combo-box-demo"
                      options={suggestion}
                      sx={{ width: 300 }}
                      renderInput={(params) =>
                        <TextField
                          {...params}
                          label="Search by title"
                          InputProps={{
                            ...params.InputProps,
                            type: 'search',
                          }}
                          onChange={handleTitleChange}
                        />
                      }
                    />
                  </div>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <div className="flex">
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="locations">
                      <PlaceIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="City, state, or country"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />

                  </div>
                </div>
                <div className="flex">
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        size="small"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </Paper>
            {/*<Stack spacing={2} direction="row">*/}
              {/*<Button variant="text">Text</Button>*/}
              {/*<Button variant="contained">Contained</Button>*/}
              {/*<Button variant="outlined">Outlined</Button>*/}
            {/*</Stack>*/}
          </ThemeProvider>
        </div>
      </div>
    </StyledSearchBar>
  );
}

export default ContactsHeader;
