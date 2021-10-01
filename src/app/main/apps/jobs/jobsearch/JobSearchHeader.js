import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import {toggleVariateDescSize} from "../../notes/store/notesSlice";
// import { toggleVariateDescSize } from './store/notesSlice';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Any Time',
  'Past Month',
  'Past Week',
  'Past 24hours'
];

function NotesHeader(props) {
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState([]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }
  //
  //   setState({ ...state, [anchor]: open });
  // };


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // const variateDescSize = useSelector(({ jobSearch }) => jobSearch.jobs.variateDescSize);

  return (
    <div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
      <div className="flex flex-shrink items-center sm:w-224">

        <div className="flex items-center">
          <Search />
          <FormControl sx={{ m: 1, width: 200 }} className="border-1 rounded-8 sm:hidden">
            <InputLabel id="demo-multiple-checkbox-label">Date Posted</InputLabel>
            <Select
              label="Date Posted"
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              size="small"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 200 }} className="sm:hidden">
            <InputLabel id="demo-multiple-checkbox-label">Experience</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              size="small"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <IconButton onClick={props.toggleDrawer('right', true)} size="large">
          <Icon>filter_alt</Icon>
        </IconButton>

      </div>

    </div>
  );
}

export default NotesHeader;
