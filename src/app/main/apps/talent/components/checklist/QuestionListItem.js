import _ from '@lodash';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
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
import FormList from '../FormList/FormList';

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

  const handleOptionChange = (data) => {
    console.log(data)
    props.onListItemChange(
      _.setIn(
        props.item,
        'options',
        data
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
      <Paper className="flex flex-col w-full shadow-none ">
        <div className="flex flex-row justify-between p-10 border-b-1">
          <FormControl variant="standard" className="flex">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              displayEmpty
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.item.type}
              name="type"
              onChange={handleTypeChange}
            >
              <MenuItem value={'SINGLELINE'}>Text(single line)</MenuItem>
              <MenuItem value={'MULTILINE'}>Text(multiple lines)</MenuItem>
              <MenuItem value={'YESNO'}>Yes/No</MenuItem>
              <MenuItem value={'SINGLECHOICE'}>Single Choice</MenuItem>
              <MenuItem value={'MULTICHOICE'}>Multiple Choice</MenuItem>
            </Select>
          </FormControl>
          <div className="flex flex-row">
            <FormControl variant="standard" className="flex">
              <InputLabel id="demo-simple-select-label">Required</InputLabel>
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.item.type}
                name="required"
                onChange={handleTypeChange}
              >
                <MenuItem value={'Yes'}>Yes</MenuItem>
                <MenuItem value={'No'}>No</MenuItem>
              </Select>
            </FormControl>

          </div>
        </div>
        <div className="p-10 border-b-1">
          {props.item.type != 'SINGLECHOICE' && props.item.type !== 'MULTICHOICE' ?
            <div>
              <Input
              className={clsx('flex flex-1 mx-8', props.item.checked && 'line-through opacity-50')}
              name="text"
              value={props.item.text}
              onChange={handleChange}
              disableUnderline
              />
            </div>
            :
            <div className="flex flex-col">
              <Input
                className={clsx('flex flex-1 mx-8', props.item.checked && 'line-through opacity-50')}
                name="text"
                value={props.item.text}
                onChange={handleChange}
                disableUnderline
              />

                    <div className="px-16">
                      <FormList list={props.item.options} onListChange={handleOptionChange} />
                    </div>
            </div>
          }
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
