import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';

import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
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



function CandidatesList(props) {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
  const user = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.user);
  const applications = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.applications);
	const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const columns = React.useMemo(
    () => [
      {
        Header: ({ selectedFlatRows }) => {
          const selectedRowIds = selectedFlatRows.map(row => row.original.id);

          return (
            selectedFlatRows.length > 0 && <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
          );
        },
        accessor: 'avatar',
        Cell: ({ row }) => {
          return <Avatar className="mx-8 h-64 w-64" alt={row.original.name} src={row.original.avatar} />;
        },
        className: 'justify-center',
        width: 64,
        sortable: false
      },
      {
        Header: 'Name',
        accessor: 'name lastName',
        Cell: ({ row }) => {
          return <div className="flex flex-col px-16 py-0">
            <Typography className="truncate">{row.original.name} {row.original.lastName}</Typography>
            <Typography color="textSecondary" className="truncate">
              {row.original.jobTitle}
            </Typography>
          </div>
        },
        className: 'font-bold',
        sortable: true
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        sortable: true
      },
      {
        Header: 'Level',
        accessor: 'jobTitle',
        Cell: ({ row }) => {
          return <BorderLinearProgress variant="determinate" value={50} />
        },
        sortable: true
      },
      {
        Header: 'Progress',
        accessor: 'email',
        Cell: ({ row }) => {
          return <Stepper activeStep={activeStep} alternativeLabel>
            {[1,2,3,4].map((label) => (
              <Step key={label}>
                <StepButton>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        },
        sortable: true
      },
      {
        id: 'action',
        width: 128,
        sortable: false,
        Cell: ({ row }) => (
          <div className="flex items-center">
            <IconButton
              onClick={ev => {
                ev.stopPropagation();
                dispatch(toggleStarredContact(row.original.id));
              }}
            >
              {user.starred && user.starred.includes(row.original.id) ? (
                <Icon>star</Icon>
              ) : (
                <Icon>star_border</Icon>
              )}
            </IconButton>
            <IconButton
              onClick={ev => {
                ev.stopPropagation();
                dispatch(removeContact(row.original.id));
              }}
            >
              <Icon>delete</Icon>
            </IconButton>
          </div>
        )
      }
    ],
    [dispatch, user.starred]
  );

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

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }

  console.log('filteredData', filteredData)
  return (
    <FuseAnimate animation="transition.slideUpIn" delay={300}>
      <ContactsTable
        columns={columns}
        data={filteredData}
        onRowClick={(ev, row) => {
          if (row) {
            dispatch(openEditContactDialog(row.original));
          }
        }}
      />
    </FuseAnimate>
  );
}

export default CandidatesList;
