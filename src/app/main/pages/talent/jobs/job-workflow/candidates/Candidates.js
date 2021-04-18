import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useDeepCompareEffect } from '@fuse/hooks';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import ContactsTable from './ContactsTable';
import { getContacts, openEditContactDialog, removeContact, toggleStarredContact, selectContacts } from '../store/contactsSlice';
import {getUserData} from "../../../../../apps/contacts/store/userSlice";
import clsx from 'clsx';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';
import {openCardDialog} from "../store/cardSlice";



const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);


const useStyles = makeStyles(theme => ({
  card: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut
  }
}));

function Candidates(props) {
  const classes = useStyles(props);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
  const user = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.user);
  const applications = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.applications);
	const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);


  useDeepCompareEffect(() => {
    dispatch(getContacts(routeParams));
    dispatch(getUserData());
  }, [dispatch, routeParams]);


  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return contacts;
      }
      return FuseUtils.filterArrayByString(contacts, _searchText);
    }

    if (contacts) {
      setFilteredData(getFilteredArray(contacts, searchText));
    }
  }, [contacts, searchText]);

  if (!filteredData) {
    return <FuseLoading/>
  }


  function handleCardClick(ev, _card) {
    ev.preventDefault();
    // dispatch(openCardDialog(_card));
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }

  return (
    <FuseAnimate animation="transition.slideUpIn" delay={300}>
      <div className="flex flex-wrap py-24">
      {filteredData.map((candidate, index) => (
        <div className="w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16" key={candidate.id}>
          <Card
            elevation={1}
            onClick={ev => handleCardClick(ev, candidate)}
          >
            <CardHeader
              avatar={
                candidate.avatar? (
                  <Avatar className="h-56 w-56" aria-label="recipe" className={classes.avatar} src={candidate.avatar}></Avatar>
                ):(<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>)
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={candidate.name + ' ' + candidate.lastName}
              subheader={candidate.jobTitle}
            />

            <div className="p-16 pb-0">

            </div>

            <div className="flex justify-between h-64 px-16 border-t-1">

            </div>
          </Card>
        </div>
      ))}
      </div>
    </FuseAnimate>
  );
}

export default Candidates;
