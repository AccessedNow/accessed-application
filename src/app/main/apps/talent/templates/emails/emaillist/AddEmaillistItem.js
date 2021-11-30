import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import ChecklistItemModel from 'app/main/apps/scrumboard/model/ChecklistItemModel';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().required('You must enter an email'),
});

function AddEmaillistItem(props) {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: props.email,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit(data) {
    props.onListItemAdd(ChecklistItemModel(data));
    reset({
      email: props.email,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListItem className="px-0" dense>
        <span className="w-40" />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="flex flex-1 mx-8"
              name="email"
              variant="outlined"
              placeholder="Add an item"
            />
          )}
        />
        <Fab
          className="mx-4"
          aria-label="Add"
          size="small"
          color="secondary"
          type="submit"
          disabled={_.isEmpty(dirtyFields) || !isValid}
        >
          <Icon>add</Icon>
        </Fab>
      </ListItem>
    </form>
  );
}

export default AddEmaillistItem;
