import Icon from '@mui/material/Icon';
import { styled, ThemeProvider } from '@mui/material/styles';
import Favorite from '@mui/icons-material/Favorite';
import FontDownload from '@mui/icons-material/FontDownload';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import format from 'date-fns/format';
import {openDialog, saveJob} from "../jobdetail/store/jobSlice";


const Root = styled('div')(({ theme }) => ({
  '& .minimal': {
    display: '-webkit-box',
    maxWidth: '100%',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  }
}));

function JobDetailBody(props) {
  const dispatch = useDispatch();
  const mainThemeDark = useSelector(selectMainThemeDark);

  let salary='';
  if(props.job.salaryFixed){
    salary = props.job.salaryFixed;
  } else if(props.job.salaryRangeLow && props.job.salaryRangeHigh) {
    salary = props.job.salaryRangeLow + '-' + props.job.salaryRangeHigh;
  } else if(props.job.salaryRangeLow && !props.job.salaryRangeHigh) {
    salary = 'from ' + props.job.salaryRangeLow;
  } else if(props.job.salaryRangeHigh && !props.job.salaryRangeLow) {
    salary = 'max ' + props.job.salaryRangeHigh;
  } else {
    salary = '--';
  }

  function handleApplyJob() {
    dispatch(openDialog(props.job));
  }


  return (
    <Root className="w-full items-center justify-between px-32 py-40">
      <div className="flex flex-1 w-full items-center justify-between mt-20">
          {!props.job.title?
          <Typography className="text-16 sm:text-20 truncate font-semibold gray text-gray-500 italic">
            Enter job title
          </Typography>
            :
          <Typography className="text-16 sm:text-20 truncate font-semibold">
            {props.job.title}
          </Typography>
          }
        {!props.preview &&
        <div className="flex">
          <IconButton aria-label="Apply" onClick={props.handleApplyJob} size="large">
            <FontDownload fontSize="inherit"/>
          </IconButton>
          <IconButton
            aria-label="Save"
            onClick={(ev) => {
              ev.stopPropagation();
              dispatch(saveJob(props.job));
            }} size="large">
            <Favorite fontSize="inherit"/>
          </IconButton>
        </div>
        }
      </div>
      <div className="flex flex-1 w-full items-center justify-between mb-40">
        <Typography className="truncate">
          {props.job.company? `${props.job.company.name} - ${props.job.country}`:''}
        </Typography>
        {!props.preview &&
        <Typography className="truncate">
          Posted 1 week ago - 12 Applicants
        </Typography>
        }
      </div>
      <div className="flex flex-1 w-full items-start justify-between mb-20">
        <div className="flex flex-col items-center justify-start">
          <Typography variant="caption" className="mt-4">
            EXPERIENCE
          </Typography>
          <Typography variant="caption" className="mt-4 font-600">
            {props.job.level?props.job.level:'--'}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="caption" className="mt-4">
            LEVEL
          </Typography>
          <Typography variant="caption" className="mt-4 font-600">
            {props.job.level?props.job.level:'--'}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="caption" className="mt-4">
            EMPLOYMENT
          </Typography>
          <Typography variant="caption" className="mt-4 font-600">
            {props.job.employmentType?props.job.employmentType:'--'}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="caption" className="mt-4">
            SALARY
          </Typography>
          <Typography variant="caption" className="mt-4 font-600">
            {salary}
          </Typography>
        </div>
      </div>

      <div className={clsx("w-full items-center justify-between", props.showDetail?'': 'minimal')}>
        <Typography variant="h6" className="mb-10 text-14 mb-30">
          Description
        </Typography>
        <div>
          {props.job.description ?
            <Typography className="mb-16" component="p" style={{whiteSpace: "pre-line"}}>
              {props.job.description}
            </Typography>
            :
            <Typography className="mb-16 gray text-gray-500 font-semibold italic" component="p">
              Enter job description
            </Typography>
          }

          {props.job.qualifications && props.job.qualifications.length?
          <div className="w-full items-center justify-between">
            <Typography variant="h6" className="mb-10 text-14 mb-30">
              Qualifications
            </Typography>
            <ul>
              {props.job.qualifications.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </div>
            :
          <span></span>
          }

          {props.job.minimumQualifications && props.job.minimumQualifications.length?
          <div className="w-full items-center justify-between">
            <Typography variant="h6" className="mb-10 text-14 mb-30">
              Minimum Qualifications
            </Typography>
            <ul>
              {props.job.minimumQualifications.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </div>
            :
            <span></span>
          }
          {props.job.responsibilities && props.job.responsibilities.length?
          <div className="w-full items-center justify-between">
            <Typography variant="h6" className="mb-10 text-14 mb-30">
              Responsibilities
            </Typography>
            <ul>
              {props.job.responsibilities.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </div>
          :
            <span></span>
          }

        </div>

      </div>
    </Root>
  );
}

export default JobDetailBody;
