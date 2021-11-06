import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

import clsx from 'clsx';
import StageModel from "../../models/StageModel";
import TaskModel from "../../../notes/model/NoteListItemModel";

const listOfTypes = [
  { value: 'EMAIL', name: 'Email'},
  { value: 'EVALUATION', name: 'Evaluation' },
  { value: 'EVENT', name: 'Event' }
]


function TaskListItem(props) {
  function handleChange(event) {
    props.onListItemChange(event.target.value, props.index);
  }

  function onSelect(event) {
    props.onListItemChange(TaskModel({type: event.target.value}), props.index);
    // reset(defaultValues);
  }

  if (!props.item) {
    return null;
  }

  return (
    <div className="flex flex-col p-0 mb-8" key={props.item.id} >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl className="flex w-full">
            <Select
              displayEmpty
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              value={props.item.type}
              onChange={onSelect}
            >
              {listOfTypes.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <FormControlLabel control={<Switch defaultChecked />} label="Required" />
            <FormControlLabel control={<Switch defaultChecked />} label="Allow Change" />
          </div>
        </Grid>
      </Grid>


      {props.item.type === 'EMAIL' ?
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl className="flex w-full">
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="type"
                value={props.item.type}
                onChange={onSelect}
              >
                {listOfTypes.map((item, idx) => (
                  <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <FormControlLabel control={<Switch defaultChecked />} label="Autosend" />
            </div>
          </Grid>
        </Grid>
        :
        <div></div>
      }
    </div>
  );
}

export default TaskListItem;
