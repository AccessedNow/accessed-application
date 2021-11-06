import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import TaskModel from '../../models/TaskModel';
import { Controller, useForm } from 'react-hook-form';

import * as yup from 'yup';
import _ from '@lodash';

const listOfTypes = [
  { value: 'SINGLELINE', name: 'Text'},
  { value: 'MULTILINE', name: 'Text(multiple lines)' },
  { value: 'YESNO', name: 'Yes/No' },
  { value: 'SINGLECHOICE', name: 'Single Selection' },
  { value: 'MULTICHOICE', name: 'Multiple Selection'}
]


const defaultValues = {
  type: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  type: yup.string().required('You must enter a value'),
});

function TaskAddListItem(props) {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSelect(data) {
    props.onListItemAdd(TaskModel(data));
    reset(defaultValues);
  }

  return (
      <ListItem className="p-0" dense>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
              <FormControl variant="standard" className="flex w-full">
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  {...field}
                  displayEmpty
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="type"
                  onChange={onSelect}
                >
                  {listOfTypes.map((item, idx) => (
                    <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
          )}
        />
      </ListItem>
  );
}

export default TaskAddListItem;
