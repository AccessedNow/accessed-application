import * as React from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import QuestionAddListItem from './QuestionAddListItem';
import QuestionListItem from './QuestionListItem';


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
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
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
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function QuestionList(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  function handleListItemChange(item) {
    props.onListChange(props.list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function handleListItemRemove(idx) {
    _.pullAt(props.list, [idx]);
    props.onListChange(props.list);
  }

  function handleListItemAdd(item) {
    props.onListChange([...props.list, item]);
  }

  if (!props.list) {
    return null;
  }

  return (
    <div className={props.className}>
      {/*<List dense>*/}
        {/*{props.list.map((item, idx) => (*/}
          {/*<QuestionListItem*/}
            {/*item={item}*/}
            {/*key={idx}*/}
            {/*index={idx}*/}
            {/*onListItemChange={handleListItemChange}*/}
            {/*onListItemRemove={handleListItemRemove}*/}
          {/*/>*/}
        {/*))}*/}
        {/*<QuestionAddListItem onListItemAdd={handleListItemAdd} />*/}
      {/*</List>*/}

      <div className="mb-20">
        {props.list.map((item, idx) => (
        <Accordion expanded={expanded === ('panel' + idx )} onChange={handleChange(('panel' + idx))}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{item.text}</Typography>
            <IconButton
              className="flex w-32 h-32 mx-4 p-0"
              aria-label="Delete"
              onClick={() => handleListItemRemove(idx)}
              size="small"
            >
              <Icon fontSize="small">delete</Icon>
            </IconButton>
          </AccordionSummary>
          <AccordionDetails>
            <QuestionListItem
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
      <QuestionAddListItem onListItemAdd={handleListItemAdd} />
    </div>
  );
}

export default QuestionList;
