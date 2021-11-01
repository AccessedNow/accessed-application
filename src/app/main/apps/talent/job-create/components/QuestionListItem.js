import _ from '@lodash';
const pathToRegexp = require('path-to-regexp');
import * as React from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { toggleInSelectedMails } from '../store/mailsSlice';

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({

  ...(selected && {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      height: '100%',
      width: 3,
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

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
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const QuestionListItem = (props) => {
  const dispatch = useDispatch();
  // const selectedMailIds = useSelector(({ mailApp }) => jobCreate.job.selectedMailIds);
  const routeParams = useParams();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <StyledListItem
      dense
      button
      onClick={() =>
        console.log('click', this)
      }
      selected={checked}
      undread={!props.mail.read}
      className="items-start py-20 px-0 md:px-8 relative"
    >

    </StyledListItem>
  );
};

export default withRouter(QuestionListItem);
