import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCandidates } from '../../store/candidatesSlice';

import CandidatesTable from './candidates-table/CandidatesTable';
import ContactsList from './candidates-table/ContactsList';
import SkillList from './skill-list/SkillList';

function Compare(props) {
  const candidates = useSelector(selectCandidates);
  const searchText = useSelector(({ candidatesApp }) => candidatesApp.candidates.searchText);
  const orderBy = useSelector(({ candidatesApp }) => candidatesApp.candidates.orderBy);
  const orderDescending = useSelector(({ candidatesApp }) => candidatesApp.candidates.orderDescending);
  const [filteredData, setFilteredData] = useState(null);

  return (
    <div className="">
      <div className="bg-white rounded-6 p-20">
        <Typography fontWeight={700} variant={'h6'} gutterBottom>
          Candidates Comparison
        </Typography>
        <ContactsList />
        <Typography fontWeight={700} variant={'h6'} gutterBottom>
          Skills Comparison
        </Typography>
        <SkillList />
      </div>
    </div>
  );
}

export default Compare;
