import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { amber, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as yup from 'yup';
import { selectLabels } from './store/labelsSlice';
import {
  removeTodo,
  addTodo,
  closeNewTodoDialog,
  closeEditTodoDialog,
  updateTodo,
} from './store/todosSlice';

const defaultValues = {
  id: '',
  title: '',
  notes: '',
  startDate: new Date(),
  dueDate: new Date(),
  completed: false,
  starred: false,
  important: false,
  deleted: false,
  labels: [],
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function CandidateDrawer(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const todoDialog = useSelector(({ todoApp }) => todoApp.todos.todoDialog);
  const labels = useSelector(selectLabels);
  const [labelMenuEl, setLabelMenuEl] = useState(null);
  const drawerWidth = isMobile? 240:500;

  const { watch, handleSubmit, formState, reset, control, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });


  const { errors, isValid, dirtyFields } = formState;
  const formId = watch('id');
  const formLabels = watch('labels');
  const dueDate = watch('deuDate');
  const startDate = watch('startDate');

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {
    /**
     * Dialog type: 'edit'
     */
    if (todoDialog.type === 'edit' && todoDialog.data) {
      reset({ ...todoDialog.data });
    }

    /**
     * Dialog type: 'new'
     */
    if (todoDialog.type === 'new') {
      reset({
        ...defaultValues,
        ...todoDialog.data,
      });
    }
  }, [todoDialog.data, todoDialog.type, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (todoDialog.props.open) {
      initDialog();
    }
  }, [todoDialog.props.open, initDialog]);

  /**
   * Close Dialog
   */
  function closeTodoDialog() {
    return dispatch(closeEditTodoDialog());
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    if (todoDialog.type === 'new') {
      dispatch(addTodo({ id: FuseUtils.generateGUID(), ...data }));
    } else {
      dispatch(updateTodo({ ...todoDialog.data, ...data }));
    }
    closeTodoDialog();
  }

  /**
   * Remove Event
   */
  function handleRemove() {
    dispatch(removeTodo(formId)).then(() => {
      closeTodoDialog();
    });
  }

  return (
    <Drawer
      {...todoDialog.props}
      anchor={'right'}
      onClose={closeTodoDialog}
    >
      <Box
        sx={{ width: drawerWidth }}
        role="presentation"
      >
        <div className="mb-16">
          <div className="flex items-center justify-between p-12">
            <div className="flex">
              <IconButton
                tabIndex={-1}
                disableRipple
                size="large"
              >
                <Icon color="secondary">check_circle</Icon>
              </IconButton>
            </div>

            <div className="flex items-center justify-start">
              <IconButton onClick={() => onChange(!value)} size="large">
                <Icon style={{ color: amber[500] }}>star</Icon>
              </IconButton>

              <div>
                <IconButton
                  aria-owns={labelMenuEl ? 'label-menu' : null}
                  aria-haspopup="true"
                  onClick={(ev) => setLabelMenuEl(ev.currentTarget)}
                  size="large"
                >
                  <Icon>label</Icon>
                </IconButton>

              </div>
            </div>
          </div>
          <Divider className="mx-24" />
        </div>
      </Box>
    </Drawer>
  );
}

export default CandidateDrawer;
