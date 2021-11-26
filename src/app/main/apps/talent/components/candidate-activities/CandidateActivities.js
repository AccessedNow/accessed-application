import FuseLoading from '@fuse/core/FuseLoading';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import _ from '@lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {getCandidateActivities} from "../../store/candidateSlice";
import ActivityList from "./ActivityList";



function CandidateActivities(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activities, setActivities] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(getCandidateActivities(props.id, routeParams)).then((response) => {
      setActivities(response.payload.content);
    });
  }, [dispatch, routeParams]);


  if(activities){}

  return (
    <div>
      <FuseScrollbars>
        <ActivityList activities={activities}/>
      </FuseScrollbars>

    </div>
  );
}

export default CandidateActivities;
