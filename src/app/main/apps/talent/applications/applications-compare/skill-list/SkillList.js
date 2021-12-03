import _ from '@lodash';
import queryString from 'query-string';
import FuseUtils from '@fuse/utils';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCandidates } from '../../../store/candidatesSlice';
import { getJobSkills } from '../../../store/jobSlice';

import SkillListItem from './SkillListItem';

function SkillList(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const candidates = useSelector(selectCandidates);
  const [skills, setSkills] = useState([{name: 'Java'}]);

  useEffect(() => {
    dispatch(getJobSkills(queryString.parse(props.location.search))).then((data) => {
      if(data) {
        const _skills = _.reduce(data.payload, function(res, skill){
          const matches = _.filter(candidates, { skills: [{id: skill.id}]} );

          if(matches) {
            res.push({name: skill.name, candidates: matches});
          }
          return res;
        }, []);
        setSkills(_skills);
      }
    });
  }, [dispatch, props, candidates]);

  if (!candidates) {
    return null;
  }

  if (candidates.length === 0) {
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
        {skills.map((skill) => (
          <motion.div variants={item} key={skill.name}>
            <SkillListItem skill={skill} />
            <Divider/>
          </motion.div>
        ))}
      </motion.div>
    </List>
  );
}

export default withRouter(SkillList);
