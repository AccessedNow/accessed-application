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

import {getCandidateEvaluations} from "../../store/candidateSlice";
import EvaluationList from "./EvaluationList";



function CandidateEvaluations(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const [evaluations, setEvaluations] = useState([]);

  const preferredCompany = useSelector(({ auth }) => auth.user.data.preferredCompany);
  const [filter, setFilter] = useState({
    companyId: preferredCompany,
    applicationId: '',
    stages: []
  });

  const [paginationSort, setPaginationSort] = useState({
    page: 0,
    size: 10,
    sortyBy: 'createdDate',
    direction: 'DESC',
    type: 'INTERNAL'
  });


  useEffect(() => {
    dispatch(getCandidateEvaluations({id: props.id, filter: filter, paginationSort: paginationSort})).then((response) => {
      setEvaluations(response.payload.content);
    });
  }, [dispatch, routeParams]);


  if(evaluations){}

  return (
    <div>
      <FuseScrollbars>
        <EvaluationList evaluations={evaluations}/>
      </FuseScrollbars>

    </div>
  );
}

export default CandidateEvaluations;
