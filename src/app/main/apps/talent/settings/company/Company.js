import FuseChipSelect from '@fuse/core/FuseChipSelect';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';

import FuseUtils from '@fuse/utils';
import withReducer from 'app/store/withReducer';

import _ from '@lodash';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAPhoto from '@material-ui/icons/AddAPhoto';


import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {buildUserAvatar} from "../../../../../utils/urlHelper";
import reducer from './store';

import TodoListItem from './TodoListItem';
import CompanyToolbar from './CompanyToolbar';
import CompanyDialog from './CompanyDialog';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  contactListItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&.active': {
      backgroundColor: theme.palette.background.paper
    }
  },
  unreadBadge: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function Company(props) {
  const user = useSelector(({ auth }) => auth && auth.user && auth.user);
  const companies = useSelector(({ auth }) => auth && auth.user && auth.user.companies);
  const classes = useStyles(props);
  const [submitted, setSubmitted] = useState(false);
  const selectedCompany = useSelector(({ auth }) => auth && auth.user && auth.user.selectedCompany);
  const { form: cardForm, handleChange, setForm, setInForm } = useForm(selectedCompany);
  const [filteredData, setFilteredData] = useState(null);

  const city = [
    {id: 1, name: 'San Jose'},
    {id: 2, name: 'Los Angeles'},
    {id: 3, name: 'Seattle'},
    {id: 4, name: 'Austin'}
  ]

  const state = [
    {id: 1, name: 'California'},
    {id: 2, name: 'New York'},
    {id: 3, name: 'Washington'},
    {id: 4, name: 'Texas'}
  ]

  const country = [
    {id: 1, name: 'United States'},
    {id: 2, name: 'Vietnam'},
    {id: 3, name: 'Japan'},
    {id: 4, name: 'France'}
  ]

  function singleChipChange(name, value) {
    setInForm(
      name,
      value
    );
  }
  function chipChange(name, value) {
    setInForm(
      name,
      value.map(item => (item.value ? item.value : item))
    );
  }


  const handleMouseDownRemoveItem = (event) => {
    event.preventDefault();

  };

  function handleUploadChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      setForm(
        _.set({ ...cardForm }, `images`, [
          {
            id: FuseUtils.generateGUID(),
            url: `data:${file.type};base64,${btoa(reader.result)}`,
            type: 'image'
          },
          ...cardForm.images
        ])
      );
    };

    reader.onerror = () => {
      console.log('error on load image');
    };
  }


  if(!selectedCompany){
    return <span>Please Log In</span>
  }
  return (
    <>
      <CompanyToolbar/>
      <List className="p-0">
        <FuseAnimateGroup
          enter={{
            animation: 'transition.slideUpBigIn'
          }}
        >
          {companies.map(company => (
            <TodoListItem company={company} key={company.id} />
          ))}
        </FuseAnimateGroup>
      </List>
      <CompanyDialog />
    </>
    /*
    <Paper className="py-24 px-32 rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
      <div className="flex items-center mb-24">
        {selectedCompany.avatar ? (
          <Avatar className={classes.large} alt="user photo" src={selectedCompany.avatar} />
        ) : (
          <label
            htmlFor="button-file"
            className={clsx(
              'flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
            )}
          >
            <input
              accept="image/*"
              className="hidden"
              id="button-file"
              type="file"
              onChange={handleUploadChange}
            />
            <Icon fontSize="large" color="action">
              cloud_upload
            </Icon>
          </label>

          // <Badge
          //   overlap="circle"
          //   anchorOrigin={{
          //     vertical: 'bottom',
          //     horizontal: 'right',
          //   }}
          //   badgeContent={<IconButton aria-label="upload"><AddAPhoto /></IconButton>}
          // >
          //   <Avatar className={classes.large}>{user.data.firstName[0]}</Avatar>
          // </Badge>

        )}
        <div className="md:flex flex-col mx-10">
          <Typography component="span" className="normal-case font-bold flex">
            {selectedCompany.name}
          </Typography>
          <Typography className="text-11 capitalize" color="textSecondary">
            {user.role.toString()}
            {(!user.role || (Array.isArray(user.role) && user.role.length === 0)) && 'Guest'}
          </Typography>
        </div>
        <div className="flex flex-1 items-center justify-end mr-12">
          <Button
            variant="contained"
            color="warning"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >Remove</Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
          >Save</Button>
        </div>

      </div>

      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Account</legend>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Firstname"
                  defaultValue="John"
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Lastname"
                  defaultValue="Doe"
                  variant="outlined"
                />
              </FormControl>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Email"
                  defaultValue="john@gmail.com"
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Phone"
                  defaultValue="Doe"
                  variant="outlined"
                />
              </FormControl>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Preferences</legend>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Language"
                  defaultValue="United States - English"
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Time Zone"
                  defaultValue="Asia/Ho_Chi_Minh"
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Time Format</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="24H"
                  onChange={handleChange}
                  label="Time Format"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={24}>24 Hours</MenuItem>
                  <MenuItem value={12}>12 Hours</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        </fieldset>
      </div>
		</Paper>
		*/
	);
}
// export default Company;
export default withReducer('settingsCompany', reducer)(Company);
