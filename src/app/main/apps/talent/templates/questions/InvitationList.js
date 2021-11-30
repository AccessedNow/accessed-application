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
import {getCompanyInvites} from '../store/membersSlice';

import InvitationListItem from './InvitationListItem';

function MemberList(props) {
  const dispatch = useDispatch();

  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    dispatch(getCompanyInvites()).then((data) => {
      setInvitations(data.payload)
    });
  }, [dispatch]);


  if (!invitations) {
    return <FuseLoading/>;
  }

  if (invitations.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There are no invitation!
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
        {invitations.map((invitation) => (
          <motion.div variants={item} key={invitation._id}>
            <InvitationListItem invitation={invitation} />
            <Divider />
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default MemberList;
