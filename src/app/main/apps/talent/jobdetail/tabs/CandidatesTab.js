import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';

import Board from './board/Board';
import ApplicationList from './applications-listview/ApplicationList';
import ApplicationGrid from './applications-gridview/ApplicationGrid';

import {getJobApplications} from "../store/applicationsSlice";
import {resetBoard} from "../store/boardSlice";

function CandidatesTab() {
  const dispatch = useDispatch();
  const routeParams = useParams();

  const [data, setData] = useState(null);
  const candidateView = useSelector(({ jobDetail }) => jobDetail.job.candidateView);
  const applications = useSelector(({ jobDetail }) => jobDetail.applications.data);

  useEffect(() => {
    console.log('candidatesTab')
  }, [dispatch]);

  useDeepCompareEffect(() => {
    if(candidateView==='LIST') {
      // dispatch(getJobApplications(routeParams));
    }
  }, [dispatch, routeParams]);

  return (
    <div>
      {candidateView === 'BOARD' &&
        <Board/>
      }
      {candidateView === 'LIST' &&
        <ApplicationList/>
      }
      {candidateView === 'GRID' &&
        <ApplicationGrid/>
      }


    </div>
  );
}

export default CandidatesTab;
