import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { useDispatch } from 'react-redux';
import _ from '@lodash';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {searchMembers, selectMembers} from '../store/membersSlice';

import MemberListItem from './MemberListItem';

function MemberList(props) {
  const dispatch = useDispatch();

  const members = useSelector(selectMembers);
  const searchText = useSelector(({ membersApp }) => membersApp.members.searchText);
  const orderBy = useSelector(({ membersApp }) => membersApp.members.orderBy);
  const orderDescending = useSelector(({ membersApp }) => membersApp.members.orderDescending);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    dispatch(searchMembers(searchText));
  }, [dispatch]);

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return members;
      }
      return FuseUtils.filterArrayByString(members, _searchText);
    }

    if (members) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(members, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [members, searchText, orderBy, orderDescending]);

  if (!members) {
    return <FuseLoading/>;
  }

  if (!filteredData || filteredData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There are no members!
        </Typography>
      </motion.div>
    );
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <List className="p-0">
      <motion.div variants={container} initial="hidden" animate="show">
        {filteredData.map((member) => (
          <motion.div variants={item} key={member._id}>
            <MemberListItem member={member} />
            <Divider />
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default MemberList;
