import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCandidates } from '../../../store/candidatesSlice';

import CandidateTableRow from './CandidateTableRow';

function CandidatesTable(props) {
  const candidates = useSelector(selectCandidates);
  const searchText = useSelector(({ candidatesApp }) => candidatesApp.candidates.searchText);
  const orderBy = useSelector(({ candidatesApp }) => candidatesApp.candidates.orderBy);
  const orderDescending = useSelector(({ candidatesApp }) => candidatesApp.candidates.orderDescending);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return candidates;
      }
      return FuseUtils.filterArrayByString(candidates, _searchText);
    }

    if (candidates) {
      setFilteredData(
        _.orderBy(
          getFilteredArray(candidates, searchText),
          [orderBy],
          [orderDescending ? 'desc' : 'asc']
        )
      );
    }
  }, [candidates, searchText, orderBy, orderDescending]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          There are no candidates!
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
        {filteredData.map((candidate) => (
          <motion.div variants={item} key={candidate.id}>
            <CandidateTableRow candidate={candidate} />
          </motion.div>
        ))}
        <Divider/>
      </motion.div>
    </List>
  );
}

export default CandidatesTable;
