import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

import StageModel from '../../models/StageModel';
import * as yup from 'yup';
import _ from '@lodash';


const listOfStages = [
  { value: 'PHONESCREEN', name: 'Phone Screen' },
  { value: 'INTERVIEW', name: 'Interview' },
  { value: 'TEST', name: 'Test' },
  { value: 'OFFER', name: 'Offer'},
  { value: 'HIRED', name: 'Hired'}
]

const defaultValues = {
  type: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  type: yup.string().required('You must select a stage type'),
});

function WorkflowAddListItem(props) {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit(data) {
    props.onListItemAdd(StageModel(data));
    reset(defaultValues);
  }

  function onSelect(event) {
    props.onListItemAdd(StageModel({type: event.target.value}));
    reset(defaultValues);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListItem className="p-0" dense>

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Add Stage</InputLabel>
              <Select
                {...field}
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="type"
                label={"Add Stage"}
                onChange={onSelect}
              >
                {listOfStages.map((item, idx) => (
                  <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

      </ListItem>
    </form>
  );
}

export default WorkflowAddListItem;
