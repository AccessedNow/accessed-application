import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ResumeListItem from './ResumeListItem';
import {getCandidateResumes} from "../../store/candidateSlice";

function ResumeList(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    // if(!candidate.resumes.length) {
      dispatch(getCandidateResumes(props.id, routeParams))
        .then((response) => {
          setResumes(response.payload);
        });
    // }
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
        {resumes.map((file) => (
            <ResumeListItem file={file} />
        ))}
    </List>
  );
}

export default ResumeList;
