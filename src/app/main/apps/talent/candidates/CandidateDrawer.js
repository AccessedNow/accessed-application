import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

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
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';

import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import CheckListMenu from './components/CheckListMenu';

import * as yup from 'yup';
import { selectLabels } from './store/labelsSlice';
import {
  removeCandidate,
  addCandidate,
  closeCandidateDialog,
  closeNewCandidateDialog,
  closeEditCandidateDialog,
  updateCandidate,
} from './store/candidatesSlice';

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


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function CandidateDrawer() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const {data, props, type} = useSelector(({ candidatesApp }) => candidatesApp.candidates.candidateDialog);
  const labels = useSelector(selectLabels);
  const [labelMenuEl, setLabelMenuEl] = useState(null);
  const drawerWidth = isMobile? 240:320;


  const { watch, handleSubmit, formState, reset, control, setValue } = useForm({
    mode: 'onChange',
    data,
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
    if (type === 'edit' && data) {
      reset({ ...data });
    }

    /**
     * Dialog type: 'new'
     */
    if (type === 'new') {
      reset({
        ...defaultValues,
        ...data,
      });
    }
  }, [data, type, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (props.open) {
      initDialog();
    }
  }, [props.open, initDialog]);

  /**
   * Close Dialog
   */
  function handleCloseCandidateDialog() {
    return dispatch(closeCandidateDialog());
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    if (type === 'new') {
      dispatch(addTodo({ id: FuseUtils.generateGUID(), ...data }));
    } else {
      dispatch(updateTodo({ ...data, ...data }));
    }
    closeCandidateDialog();
  }

  /**
   * Remove Event
   */
  function handleRemove() {
    dispatch(removeTodo(formId)).then(() => {
      closeCandidateDialog();
    });
  }

  if(!props.open){
    return <span></span>;
  }

  return (
    <Drawer
      {...props}
      anchor={'right'}
      onClose={handleCloseCandidateDialog}
    >
      <Box
        sx={{ width: drawerWidth }}
        role="presentation"
      >

        <AppBar position="static" elevation={0}>
          <Toolbar className="flex w-full items-center justify-between">
            <div className="flex">
              <IconButton
                tabIndex={-1}
                disableRipple
                size="large"
              >
                <Icon color="secondary">check_circle</Icon>
              </IconButton>
              <Controller
                name="checklists"
                control={control}
                defaultValue={[]}
                render={({ field: { onChange, value } }) => (
                  <CheckListMenu
                    onAddCheckList={(newList) => onChange([...cardForm.checklists, newList])}
                  />
                )}
              />
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
          </Toolbar>
          <div className="flex flex-col items-center justify-center pb-24">
            <Avatar className="w-72 h-72" alt="contact avatar" src={data.avatar} />
            {/*<Badge*/}
              {/*overlap="circular"*/}
              {/*anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}*/}
              {/*badgeContent={*/}
                {/*<Rating name="read-only" value={data.rating} readOnly />*/}
              {/*}*/}
            {/*>*/}
              {/*<Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />*/}
            {/*</Badge>*/}

            <Typography variant="h6" color="inherit" className="pt-8">
              {data.firstName + ' ' + data.lastName}
            </Typography>
            <Typography variant="body" color="inherit" className="pt-8">
              {data.jobTitle}
            </Typography>
          </div>
        </AppBar>
        <div className="p-20">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                EMAIL
              </Typography>
              <Typography variant={'body'}>
                {data.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                PHONE
              </Typography>
              <Typography variant={'body'}>
                {data.phoneNumnber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                LOCATION
              </Typography>
              <Typography variant={'body'}>
                {data.primaryAddress.city + ' ' + data.primaryAddress.country}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                EMAIL
              </Typography>
              <Typography variant={'body'}>
                {data.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant={'subtitle2'} fontWeight={600}>
                EMAIL
              </Typography>
              <Typography variant={'body'}>
                {data.firstName}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Drawer>
  );
}

export default CandidateDrawer;
