import _ from '@lodash';
import * as React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
import TextField from '@mui/material/TextField';

import CheckboxList from '../CheckboxList/CheckboxList';

import clsx from 'clsx';
import JobModel from "../../models/JobModel";

const validationSchema = yup.object({
  text: yup
    .string()
    .trim()
    .required('Must enter text'),

});

const listOfTypes = [
  { value: 'SINGLELINE', name: 'Text'},
  { value: 'MULTILINE', name: 'Text(multiple lines)' },
  { value: 'YESNO', name: 'Yes/No' },
  { value: 'SINGLECHOICE', name: 'Single Selection' },
  { value: 'MULTICHOICE', name: 'Multiple Selection'}
  ]


function QuestionListItem(props) {
  const [age, setAge] = React.useState('');
  const [data, setData] = React.useState(props.item);

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
  const questionForm = watch();


  const handleTypeChange = (event) => {
    setData(
      {...data, type: event.target.value}
    )
  };

  const handleRequiredChange = (event) => {
    setData(
      {...data, required: event.target.value}
    )
  };

  const handleOptionChange = (data) => {
    props.onListItemChange(
      _.setIn(
        props.item,
        'options',
        data
      )
    );
  };

  function handleCancel() {
    setData(questionForm);
    props.onPanelChange('');
  }

  function handleChange(event) {

    setData(
      {...data, text: event.target.value}
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
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              displayEmpty
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.type}
              name="type"
              onChange={handleTypeChange}
            >
              {listOfTypes.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="flex flex-row">
            <FormControl variant="standard" className="flex">
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.required}
                name="required"
                onChange={handleRequiredChange}
              >
                  <MenuItem key={1} value={false}>Optional</MenuItem>
                <MenuItem key={2} value={true}>Required</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="p-10 border-b-1">
          {data.type != 'SINGLECHOICE' && data.type !== 'MULTICHOICE' ?
            <div>
              <Input
              className={clsx('flex flex-1 mx-8', props.item.checked && 'line-through opacity-50')}
              name="text"
              value={props.item.text}
              // onChange={handleChange}
              onChange = {() =>
                setValue("lastName", "Luo", {
                  shouldValidate: true,
                  shouldDirty: true
                })
              }
              disableUnderline
              />
            </div>
            :
            <div className="flex flex-col">
              <Controller
                name="text"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-16"
                    error={!!errors.text}
                    required
                    helperText={errors?.text?.message}
                    label="Question"
                    autoFocus
                    id="question"
                    variant="standard"
                    fullWidth
                    value={data.text}
                    onChange={handleChange}
                  />
                )}
              />
                    <div className="px-16">
                      <CheckboxList list={props.item.options} onListChange={handleOptionChange} />
                    </div>
            </div>
          }
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

export default QuestionListItem;
