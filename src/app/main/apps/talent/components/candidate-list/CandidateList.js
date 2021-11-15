import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@mui/material/List';

import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CandidateListItem from './CandidateListItem';
import {getCandidateSimilar} from "../../store/candidateSlice";

function CandidateList(props) {

  const dispatch = useDispatch();
  const routeParams = useParams();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    dispatch(getCandidateSimilar(props.id, routeParams))
      .then((response) => {
        let list = _.reduce(response.payload, function(res, item){
          if(item.firstName){
            res.push(item)
          }
          return res;
        }, []);
        setCandidates(list);
      });
  }, [dispatch, routeParams]);


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
        {candidates.map((candidate) => (
            <CandidateListItem candidate={candidate} />
        ))}
    </List>
  );
}

export default CandidateList;
