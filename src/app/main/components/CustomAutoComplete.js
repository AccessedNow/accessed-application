import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import ButtonBase from '@mui/material/ButtonBase';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import {setSearchText} from "../apps/jobs/store/jobsSlice";

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    margin: 0,
    color: 'inherit',
    fontSize: 13,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  [`& .${autocompleteClasses.listbox}`]: {
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative',
  },
}));

function PopperComponent(props) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

PopperComponent.propTypes = {
  anchorEl: PropTypes.any,
  disablePortal: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid #e1e4e8`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: '100%',
  borderBottom: `1px solid ${
    theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
    }`,
  '& input': {
    borderRadius: 4,
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
    fontSize: 14,
  },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function CustomAutoComplete(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(props.value);
  const [pendingValue, setPendingValue] = React.useState([]);
  const [options, setOptions] = React.useState(labels);

  console.log(value)
  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
    props.onUpdate(props.name, pendingValue);
  };

  const handleOpen = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const onChange = (event, newValue, reason, item) => {
    if (
      event.type === 'keydown' &&
      event.key === 'Backspace' &&
      reason === 'removeOption'
    ) {
      return;
    }

    const temp = newValue.map((option) => option.name?option.name:option)
    setPendingValue(temp);
  };

  const isOptionEqualToValue = (option, value) => option.name === value.name;
  const getOptionLabel = (option) => option.name;

  const open = Boolean(anchorEl);
  const id = open ? 'field-label' : undefined;

  return (
    <React.Fragment>
      <Button disableRipple variant="outlined" size="small" name="test" onClick={handleClick}>
        <span>Labels</span>
        <SettingsIcon />
      </Button>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === 'escape') {
                  handleClose();
                }
              }}
              value={pendingValue}
              isOptionEqualToValue={props.isOptionEqualToValue?props.isOptionEqualToValue:isOptionEqualToValue}
              onChange={props.onChange?props.onChange:onChange}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No Result"
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.name}
                </li>
              )}
              options={[...options].sort((a, b) => {
                // Display the selected labels first.
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + options.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + options.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={props.getOptionLabel?props.getOptionLabel:getOptionLabel}
              renderInput={(params) => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Filter labels"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>
  );
}

const labels = [
  {
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers',
  },
  {
    name: 'help wanted',
    color: '#008672',
    description: 'Extra attention is needed',
  },
  {
    name: 'priority: critical',
    color: '#b60205',
    description: '',
  },
  {
    name: 'priority: high',
    color: '#d93f0b',
    description: '',
  },
  {
    name: 'priority: low',
    color: '#0e8a16',
    description: '',
  },
  {
    name: 'priority: medium',
    color: '#fbca04',
    description: '',
  },
  {
    name: "status: can't reproduce",
    color: '#fec1c1',
    description: '',
  },
  {
    name: 'status: confirmed',
    color: '#215cea',
    description: '',
  },
  {
    name: 'status: duplicate',
    color: '#cfd3d7',
    description: 'This issue or pull request already exists',
  },
  {
    name: 'status: needs information',
    color: '#fef2c0',
    description: '',
  },
  {
    name: 'status: wont do/fix',
    color: '#eeeeee',
    description: 'This will not be worked on',
  },
  {
    name: 'type: bug',
    color: '#d73a4a',
    description: "Something isn't working",
  },
  {
    name: 'type: discussion',
    color: '#d4c5f9',
    description: '',
  },
  {
    name: 'type: documentation',
    color: '#006b75',
    description: '',
  },
  {
    name: 'type: enhancement',
    color: '#84b6eb',
    description: '',
  },
  {
    name: 'type: epic',
    color: '#3e4b9e',
    description: 'A theme of work that contain sub-tasks',
  },
  {
    name: 'type: feature request',
    color: '#fbca04',
    description: 'New feature or request',
  },
  {
    name: 'type: question',
    color: '#d876e3',
    description: 'Further information is requested',
  },
];
