import FuseChipSelect from '@fuse/core/FuseChipSelect';
import FuseUtils from '@fuse/utils';

import _ from '@lodash';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
import {useDispatch, useSelector} from "react-redux";
import {buildUserAvatar} from "../../../../../utils/urlHelper";
import {amber, red} from "@material-ui/core/colors/index";
import {updateTodo} from "./store/todosSlice";
import {openNewAddressDialog, openEditAddressDialog} from "./store/companySlice";
import AddressDialog from './AddressDialog';

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


function CompanyDetail(props) {
  const dispatch = useDispatch();
  const selectedCompany = useSelector(({ auth }) => auth && auth.user && auth.user.selectedCompany);
  const classes = useStyles(props);
  const { form: cardForm, handleChange, setForm, setInForm } = useForm(selectedCompany);
  const [submitted, setSubmitted] = useState(false);

  const suggestions = ['Automotive', 'Banking', 'Biotechnology', 'Broadcast Media', 'Chemicals'].map(item => ({
    value: item,
    label: item
  }));

  const [industries, setIndustries] = useState([
    {
      value: 'Accounting',
      label: 'Accounting'
    },
    {
      value: 'Alternative Medicine',
      label: 'Alternative Medicine'
    },
    {
      value: 'Animation',
      label: 'Animation'
    }
  ]);

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

  function handleChipChange(value) {
    setIndustries(value);
  }

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
          <legend className="font-600 text-16">Detail</legend>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Name"
                  defaultValue={selectedCompany.name}
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Display Name"
                  defaultValue={selectedCompany.displayName}
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
                  defaultValue={selectedCompany.email}
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Phone"
                  defaultValue={selectedCompany.phoneNumber}
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
                  label="Website"
                  defaultValue={selectedCompany.website}
                  variant="outlined"
                />
              </FormControl>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">About, Industry, Type of Business</legend>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Type of Business</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="24H"
                  onChange={handleChange}
                  label="Type of Business"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={24}>Private Organization</MenuItem>
                  <MenuItem value={12}>Government</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">
              <FuseChipSelect
                className="w-full my-16"
                value={industries}
                onChange={handleChipChange}
                placeholder="Select multiple industries"
                textFieldProps={{
                  label: 'Industry',
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: 'outlined'
                }}
                options={suggestions}
                isMulti
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Company Size</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value="24H"
                  onChange={handleChange}
                  label="Company Size"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={24}>Private Organization</MenuItem>
                  <MenuItem value={12}>Government</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex-1 mb-24 mr-20">

              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="Year Founded"
                  defaultValue={selectedCompany.yearFounded}
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
                  label="About"

                  defaultValue={selectedCompany.website}
                  variant="outlined"
                />
              </FormControl>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Social Links</legend>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-20">
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-error"
                  label="LinkedIn"
                  defaultValue={selectedCompany.partyLinks}
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
                  label="Facebook"
                  defaultValue={selectedCompany.partyLinks}
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
                  label="Twitter"
                  defaultValue={selectedCompany.partyLinks}
                  variant="outlined"
                />
              </FormControl>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Addresses</legend>
          <List className="p-0">
              {selectedCompany.addresses.map(address => (
                <ListItem
                  className={clsx(
                    classes.todoItem,
                    { completed: address.isPrimary },
                    'border-solid border-b-1 py-16 px-0 sm:px-8'
                  )}
                  dense
                  button
                >
                  <div className="flex flex-1 flex-col relative overflow-hidden px-8">
                    <Typography
                      variant="subtitle1"
                      className="todo-title truncate"
                      color={selectedCompany.isPrimary ? 'textSecondary' : 'inherit'}
                    >
                      {address.address1}
                    </Typography>

                    <Typography color="textSecondary" className="todo-notes truncate">
                    </Typography>


                  </div>

                  <div className="px-8">
                    <IconButton
                      onClick={ev => {
                        ev.preventDefault();
                        dispatch(openEditAddressDialog(address));
                      }}
                    >
                      {address.isPrimary ? <Icon style={{ color: amber[500] }}>star</Icon> : <Icon>star_outline</Icon>}
                    </IconButton>

                  </div>
                </ListItem>
              ))}
          </List>
        </fieldset>
      </div>

      <AddressDialog/>
		</Paper>
	);
}

export default CompanyDetail;
