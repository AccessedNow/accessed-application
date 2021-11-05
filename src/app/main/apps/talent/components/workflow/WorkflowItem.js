import _ from '@lodash';
import * as React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
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
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import TaskList from '../tasklist/TaskList';

import clsx from 'clsx';
import JobModel from "../../models/JobModel";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Must enter name'),

});

const listOfStages = [
  { value: 'APPLIED', name: 'Applied'},
  { value: 'PHONESCREEN', name: 'Phone Screen' },
  { value: 'INTERVIEW', name: 'Interview' },
  { value: 'TEST', name: 'Test' },
  { value: 'OFFER', name: 'Offer'},
  { value: 'HIRED', name: 'Hired'}
  ]

const listOfTimeLimits = [
  { value: '7', name: '7 days'},
  { value: '14', name: '14 days'},
  { value: '21', name: '21 days'}
]

function WorkflowItem(props) {
  const [age, setAge] = React.useState('');
  const [data, setData] = React.useState(props.item);
  const [showList, setShowList] = React.useState(false);
  const defaultValues = _.merge(
    {},
    data
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const form = watch();


  const handleTypeChange = (event) => {
    setData(
      {...data, type: event.target.value}
    )
  };

  const handleTimeLimitChange = (event) => {
    setData(
      {...data, timeLimit: event.target.value}
    )
  };

  const handleTasksChange = (data) => {
    props.onListItemChange(
      _.setIn(
        props.item,
        'tasks',
        data
      )
    );
  };

  function handleCancel() {
    setData(form);
    props.onPanelChange('');
  }

  function handleChange(event) {

    setData(
      {...data, name: event.target.value}
    )

  }

  function handleSave() {
    props.onListItemChange(data);
    props.onPanelChange('');
  }

  if (!props.item) {
    return null;
  }

  console.log(data)

  return (
    <ListItem className="p-0 mb-28" key={props.item.id} dense>
      <Paper className="flex flex-col w-full shadow-none ">
        <div className="flex flex-row justify-between p-10 border-b-1">
          <FormControl variant="standard" className="flex">
            <InputLabel id="demo-simple-select-label">Stage</InputLabel>
            <Select
              displayEmpty
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.type}
              name="type"
              onChange={handleTypeChange}
            >
              {listOfStages.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className="flex">
            <InputLabel id="demo-simple-select-label">Time Limit</InputLabel>
            <Select
              displayEmpty
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.timeLimit}
              name="timeLimit"
              onChange={handleTimeLimitChange}
            >
              {listOfTimeLimits.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="p-10 border-b-1">
          <div className="flex flex-col">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  error={!!errors.name}
                  required
                  helperText={errors?.name?.message}
                  label="Name"
                  autoFocus
                  id="name"
                  variant="standard"
                  fullWidth
                  value={data.name}
                  onChange={handleChange}
                />
              )}
            />
            {/*<div className="px-16">*/}
              {/*<TaskList list={props.item.tasks} onListChange={handleTasksChange} />*/}
            {/*</div>*/}
            <Controller
              name="tasks"
              control={control}
              defaultValue={[]}
              render={({ field: { onChange, value } }) => {
                if (value.length === 0 && !showList) {
                  return null;
                }
                return (
                  <div className="">
                    <TaskList list={value} onListChange={handleTasksChange} />
                  </div>
                );
              }}
            />
          </div>
          <div className="flex flex-auto justify-between items-center pb-12">
            <div className="flex items-center">

              <Tooltip title="Add Task" placement="bottom">
                <IconButton
                  className="w-32 h-32 mx-4 p-0"
                  onClick={() => setShowList(!showList)}
                  size="large"
                >
                  <Icon fontSize="small">playlist_add_check</Icon>
                </IconButton>
              </Tooltip>


            </div>
          </div>

        </div>
        <div className="p-10 justify-end">
          <Stack spacing={2} direction="row">
            <Button size="small" variant="text" onClick={handleCancel}>Cancel</Button>
            <Button size="small" variant="contained">Save and add another</Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              type="submit"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              className="rounded-6"
              onClick={handleSave}
            >
              Save
            </Button>
          </Stack>
        </div>
      </Paper>

    </ListItem>
  );
}

export default WorkflowItem;
