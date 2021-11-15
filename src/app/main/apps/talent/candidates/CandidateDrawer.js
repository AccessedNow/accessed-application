import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

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
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import CheckListMenu from './components/CheckListMenu';
import CandidateNotes from '../components/candidate-notes/CandidateNotes';

import * as yup from 'yup';
import { selectLabels } from '../store/labelsSlice';
import {
  removeCandidate,
  addCandidate,
  closeCandidateDialog,
  closeNewCandidateDialog,
  closeEditCandidateDialog,
  updateCandidate,
} from '../store/candidatesSlice';
import {getChat} from "../../chat/store/chatSlice";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );F
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CandidateDrawer() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const {data, props, type} = useSelector(({ candidatesApp }) => candidatesApp.candidates.candidateDialog);

  const drawerWidth = isMobile? 240:400;


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
  const [tab, setTab] = useState(0);


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

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

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
            </div>

            <div className="flex items-center justify-start">
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
              <IconButton onClick={() => onChange(!value)} size="large">
                <Icon style={{ color: amber[500] }}>favorite</Icon>
              </IconButton>

            </div>
          </Toolbar>
          <div className="flex flex-col items-center justify-center pb-24">
            <Avatar className="w-96 h-96" alt="contact avatar" src={data.avatar} />
            {/*<Badge*/}
              {/*overlap="circular"*/}
              {/*anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}*/}
              {/*badgeContent={*/}
                {/*<Rating name="read-only" value={data.rating} readOnly />*/}
              {/*}*/}
            {/*>*/}
              {/*<Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />*/}
            {/*</Badge>*/}

            <Link className="font-normal mt-8" href={`/talent/candidates/${data.id}`}>
              <Typography variant="h6" color="inherit" className="pt-8">
                {data.firstName + ' ' + data.lastName}
              </Typography>
            </Link>

            <Typography variant="body" color="inherit" className="pt-8">
              {data.jobTitle}
            </Typography>
          </div>
        </AppBar>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleTabChange} aria-label="basic tabs example">
              <Tab label="Detail" {...a11yProps(0)} />
              <Tab label="Notes" {...a11yProps(1)} />
              <Tab label="History" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography variant={'subtitle2'} fontWeight={500}>
                  EMAIL
                </Typography>
                <Typography variant={'body'}>
                  {data.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant={'subtitle2'} fontWeight={500}>
                  PHONE
                </Typography>
                <Typography variant={'body'}>
                  {data.phoneNumnber}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant={'subtitle2'} fontWeight={500}>
                  LOCATION
                </Typography>
                <Typography variant={'body'}>
                  {data.primaryAddress.city + ' ' + data.primaryAddress.country}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant={'subtitle2'} fontWeight={500}>
                  EMAIL
                </Typography>
                <Typography variant={'body'}>
                  {data.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant={'subtitle2'} fontWeight={500}>
                  EMAIL
                </Typography>
                <Typography variant={'body'}>
                  {data.firstName}
                </Typography>
              </Grid>
          </Grid>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <CandidateNotes id={data.id} />
          </TabPanel>
          <TabPanel value={tab} index={2}>

          </TabPanel>
        </Box>

      </Box>
    </Drawer>
  );
}

export default CandidateDrawer;
