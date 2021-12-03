import { motion } from 'framer-motion';
import FuseUtils from '@fuse/utils';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import Typography from '@mui/material/Typography';
import { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApplictionsMultiSelectMenu from './ApplictionsMultiSelectMenu';
import ApplicationsTable from './ApplicationsTable';
import {
  openCandidateDialog,
  removeCandidate,
  toggleSubscribeCandidate,
  selectCandidates,
} from '../../../store/candidatesSlice';
import { dateDiffBetween } from '../../../../../../utils/helper';

function ApplicationsList(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectCandidates);
  const searchText = useSelector(({ candidatesApp }) => candidatesApp.candidates.searchText);

  const [filteredData, setFilteredData] = useState(null);

  const calculateExperiences = (fromDate, thruDate) => {
    let exp = dateDiffBetween(fromDate, thruDate);
    let total = exp.yr?exp.yr:'';
    let month = exp.mo?total+ '.' + exp.mo:'';
    return total;
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'firstName',
        Cell: ({ row }) => {
          return <div className="flex flex-row items-center justify-start">
            <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />
            <Typography className="mx-8" alt={row.original.firstName}>{row.original.firstName + ' ' + row.original.lastName}</Typography>
          </div>;
        },
        className: 'font-medium',
        sortable: true,
      },
      {
        id: 'company',
        Header: 'Company',
        width: 60,
        sortable: true,
        Cell: ({ row }) => {
          let latestExp = row.original.experiences?row.original.experiences[row.original.experiences.length-1]:'';
          return <div className="flex items-center">
            {latestExp?latestExp.employer.name:''}
          </div>
        },
      },
      {
        id: 'experiences',
        Header: 'Exp',
        width: 60,
        sortable: true,
        Cell: ({ row }) => {

          let fromDate = _.sortedUniq(_.map(row.original.experiences, 'fromDate'));
          let thruDate = _.sortedUniq(_.map(row.original.experiences, 'thruDate'));
          return <div className="flex items-center">
            {calculateExperiences(fromDate[0], thruDate[thruDate.length-1])} yrs
          </div>
        },
      },
      {
        id: 'rating',
        Header: 'Rating',
        accessor: 'rating',
        width: 60,
        sortable: true,
        Cell: ({ row }) => {
          return <Rating name="read-only" value={row.original.rating} readOnly />
        },
      },
      {
        id: 'action',
        width: 128,
        sortable: false,
        Cell: ({ row }) => (
          <div className="flex items-center">

            <IconButton
              onClick={(ev) => {
                ev.stopPropagation();
                dispatch(removeCandidate(row.original.id));
              }}
              size="large"
            >
              <Icon>delete</Icon>
            </IconButton>
          </div>
        ),
      },
    ],
    [dispatch]
  );

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
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          There are no applications!
        </Typography>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex flex-auto w-full max-h-full"
    >
      <ApplicationsTable
        columns={columns}
        data={filteredData}
        onRowClick={(ev, row) => {
          if (row) {
            dispatch(openCandidateDialog(row.original));
          }
        }}
      />
    </motion.div>
  );
}

export default ApplicationsList;
