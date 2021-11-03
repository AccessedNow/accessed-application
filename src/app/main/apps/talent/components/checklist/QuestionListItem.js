import _ from '@lodash';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import clsx from 'clsx';

function QuestionListItem(props) {
  const [age, setAge] = React.useState('');

  const handleTypeChange = (event) => {
    props.onListItemChange(
      _.setIn(
        props.item,
        event.target.name,
        event.target.value
      )
    );
  };

  const handleRequiredChange = (event) => {
    props.onListItemChange(
      _.setIn(
        props.item,
        event.target.name,
        event.target.value === 'Yes' ? true:false
      )
    );
  };

  function handleChange(event) {
    props.onListItemChange(
      _.setIn(
        props.item,
        event.target.name,
        event.target.type === 'checkbox' ? event.target.checked : event.target.value
      )
    );
  }

  if (!props.item) {
    return null;
  }

  return (
    <ListItem className="p-0 mb-20" key={props.item.id} dense>
      <Paper className="flex flex-col w-full shadow-none border-1 rounded-4">
        <div className="flex flex-row justify-between p-10 border-b-1">
          <FormControl variant="standard" className="flex">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.item.type}
              label="Type"
              name="type"
              onChange={handleTypeChange}
            >
              <MenuItem value={'SINGLELINE'}>Text(single line)</MenuItem>
              <MenuItem value={'MULTILINE'}>TEXT(multiple lines)</MenuItem>
              <MenuItem value={'YESNO'}>Yes/No</MenuItem>
              <MenuItem value={'SINGLECHOICE'}>Single Choice</MenuItem>
              <MenuItem value={'MULTICHOICE'}>Multiple Choice</MenuItem>
            </Select>
          </FormControl>
          <div>
            <FormControl variant="standard" className="flex">
              <InputLabel id="demo-simple-select-label">Required</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.item.type}
                label="Required"
                name="required"
                onChange={handleTypeChange}
              >
                <MenuItem value={'Yes'}>Yes</MenuItem>
                <MenuItem value={'No'}>No</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              className="flex w-32 h-32 mx-4 p-0"
              aria-label="Delete"
              onClick={() => props.onListItemRemove(props.index)}
              size="large"
            >
              <Icon fontSize="small">delete</Icon>
            </IconButton>
          </div>
        </div>
        <div className="p-10 border-b-1">
          <Input
            className={clsx('flex flex-1 mx-8', props.item.checked && 'line-through opacity-50')}
            name="text"
            value={props.item.text}
            onChange={handleChange}
            disableUnderline
          />
        </div>
        <div className="p-10 justify-end">
          <Stack spacing={2} direction="row">
            <Button size="small" variant="text">Cancel</Button>
            <Button size="small" variant="contained">Save and add another</Button>
            <Button size="large" variant="outlined">Save</Button>
          </Stack>
        </div>
      </Paper>

    </ListItem>
  );
}

export default QuestionListItem;
