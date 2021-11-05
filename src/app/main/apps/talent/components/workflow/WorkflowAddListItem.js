import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Controller, useForm } from 'react-hook-form';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import StageModel from '../../models/StageModel';
import * as yup from 'yup';
import _ from '@lodash';

const defaultValues = {
  name: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a stage name'),
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListItem className="p-0" dense>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="flex flex-1"
              error={!!errors.name}
              helperText={errors?.name?.message}
              placeholder="Add a stage"
              variant="standard"
              autoFocus
              hiddenLabel
              InputProps={{
                disableUnderline: true,
                className: 'px-2',
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      className="w-32 h-32 p-0 -mx-6"
                      aria-label="Add"
                      type="submit"
                      size="large"
                    >
                      <Icon fontSize="small">add</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </ListItem>
    </form>
  );
}

export default WorkflowAddListItem;
