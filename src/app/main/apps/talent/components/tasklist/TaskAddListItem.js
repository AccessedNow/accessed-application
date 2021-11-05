import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Controller, useForm } from 'react-hook-form';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import TaskModel from '../../models/TaskModel';
import * as yup from 'yup';
import _ from '@lodash';

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

  function onSubmit(data) {
    props.onListItemAdd(TaskModel(data));
    reset(defaultValues);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListItem className="p-0" dense>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="flex flex-1"
              error={!!errors.type}
              helperText={errors?.type?.message}
              placeholder="Add a task"
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
                      disabled={_.isEmpty(dirtyFields) || !isValid}
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

export default TaskAddListItem;
