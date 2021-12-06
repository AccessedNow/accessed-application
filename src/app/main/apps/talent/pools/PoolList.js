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
import {selectAllPools, deselectAllPools, selectPools} from '../store/poolsSlice';

import PoolListItem from './PoolListItem';

function PoolList(props) {
  const dispatch = useDispatch();

  const pools = useSelector(selectPools);
  const searchText = useSelector(({ poolsApp }) => poolsApp.pools.searchText);
  const orderBy = useSelector(({ poolsApp }) => poolsApp.pools.orderBy);
  const orderDescending = useSelector(({ poolsApp }) => poolsApp.pools.orderDescending);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
  }, [dispatch]);

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return pools;
      }
      return FuseUtils.filterArrayByString(pools, _searchText);
    }

    if (pools) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(pools, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [pools, searchText, orderBy, orderDescending]);

  if (!pools) {
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
          There are no pools!
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
        {filteredData.map((pool) => (
          <motion.div variants={item} key={pool._id}>
            <PoolListItem pool={pool} />
            <Divider />
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default PoolList;
