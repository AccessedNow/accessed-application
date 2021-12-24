import Icon from '@mui/material/Icon';
import { styled, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Favorite from '@mui/icons-material/Favorite';
import FontDownload from '@mui/icons-material/FontDownload';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Typography from '@mui/material/Typography';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';

import format from 'date-fns/format';
import {openDialog, saveJob} from "../jobdetail/store/jobSlice";


const Root = styled('div')(({ theme }) => ({
  '& .minimal': {
    display: '-webkit-box',
    maxWidth: '100%',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  },
  '& .creator': {
    borderWidth: 1,
    borderColor: '#eee',

    '& .premium': {
      letterSpacing: 2
    }
  }

}));

function JobDetailBody(props) {
  const dispatch = useDispatch();
  const mainThemeDark = useSelector(selectMainThemeDark);
  const [open, setOpen] = useState(false);

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

  const handleApplyJob =() => {
    dispatch(openDialog(props.job));
  }

  const handleOpenEmail = () => {
    setOpen(true);
  };

  const handleCloseEmail = () => {
    setOpen(false);
  };


  return (
    <Root className="w-full items-center justify-between px-10 md:px-32 py-40">
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
      <div className="flex flex-col md:flex-row justify-between flex-1 w-full items-start  mb-40">
        <Typography className="truncate">
          {props.job.company? `${props.job.company.name} - ${props.job.country}`:''}
        </Typography>
        {!props.preview &&
        <Typography className="truncate">
          Posted 1 week ago - {props.job.noApplied} Applicants
        </Typography>
        }
      </div>
      <div className="creator flex flex-col md:flex-row lg:flex-row flex-1 justify-between w-full items-start justify-between mb-20 p-12 rounded-6">
        <div className="flex flex-row items-center justify-center">
          <Avatar className="w-48 h-48" src={props.job.createdBy.avatar} />
          <div className="flex flex-col ml-10">
            <Typography variant="h6" fontWeight={600} className="text-14">
              {props.job.createdBy.firstName + ' ' + props.job.createdBy.lastName}
            </Typography>
            <Typography variant="caption" className="text-12">
              {props.job.createdBy.jobTitle}
            </Typography>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-center">
          <div className="flex flex-row items-start justify-center">
            <img src="assets/icons/shield_gold_2.png" className="w-16 h-16 mr-4" />
            <Typography variant="caption" className="premium">
              PREMIUM
            </Typography>
          </div>
          <Button type="link" onClick={handleOpenEmail}>Send Email</Button>
        </div>
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
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleCloseEmail}>
        <DialogTitle className="border-b-1">
          <div className="flex flex-row items-center w-full ">
            <Avatar className="w-48 h-48" src={props.job.createdBy.avatar} />
            <div className="flex flex-col ml-10">
              <Typography variant="h6" fontWeight={600} className="text-14">
                {props.job.createdBy.firstName + ' ' + props.job.createdBy.lastName}
              </Typography>
              <Typography variant="caption" className="text-12">
                {props.job.createdBy.jobTitle}
              </Typography>
            </div>
          </div>
        </DialogTitle>
        <DialogContent className="flex flex-col p-0">
          <Input defaultValue={`I’m interested in your ${props.job.title}`} inputProps={{ 'aria-label': 'Enter Subject' }} className="p-16" />
          <TextareaAutosize
            aria-label="Enter Message"
            minRows={6}
            placeholder="Enter Message"
            className="w-full p-16"
          />
        </DialogContent>
        <DialogActions className="p-16 border-t-1">
          <Button onClick={handleCloseEmail}>Cancel</Button>
          <Button onClick={handleCloseEmail}>Send</Button>
        </DialogActions>
      </Dialog>
    </Root>
  );
}

export default JobDetailBody;
