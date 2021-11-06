import _ from '@lodash';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import TaskAddListItem from './TaskAddListItem';
import TaskListItem from './TaskListItem';
import TaskModel from "../../models/TaskModel";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderRadius: 6
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function TaskList(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  function handleListItemChange(item, index) {
    props.onListChange(props.list.map((_item, idx) => {
      return index===idx ? item : _item
    }));
  }

  function handleListItemRemove(idx) {
    _.pullAt(props.list, [idx]);
    props.onListChange(props.list);
  }


  function handleListItemAdd(item) {
    props.onListChange([...props.list, item]);
  }

  function onSelect(data) {
    console.log(props.item)
    // props.onListItemAdd(TaskModel(data));
    // reset(defaultValues);
  }

  console.log('tasklist', props)

  if (!props.list) {
    return null;
  }

  return (

  <div className={props.className}>
    <div className="tasks mb-20">
      {props.list.map((item, idx) => (
        <Accordion key={idx} expanded={expanded === ('panel'+idx)} onChange={handleChange(('panel'+idx))}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="flex flex-row items-center justify-between w-full">
              <Typography>{item.type}</Typography>
              <IconButton
                className="w-32 h-32 mx-4 p-0"
                aria-label="Delete"
                onClick={() => handleListItemRemove(idx)}
                size="small"
              >
                <Icon fontSize="small">delete</Icon>
              </IconButton>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <TaskListItem
              item={item}
              key={idx}
              index={idx}
              onListItemChange={handleListItemChange}
              onListItemRemove={handleListItemRemove}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    <TaskAddListItem onListItemAdd={handleListItemAdd} />
  </div>
  );
}

export default TaskList;
