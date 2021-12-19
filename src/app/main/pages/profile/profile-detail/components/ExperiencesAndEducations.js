import _ from '@lodash';
import clsx from 'clsx';
import dateFormat from "dateformat";
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function ExperiencesAndEducations(props) {
  const {experiences, educations } = props;

  return (
    <Paper variant="outlined" className="flex flex-col py-24 mb-16 rounded-6">
      <div className="border-b-1 px-24">
        <div className="flex flex-row justify-between">
          <Typography variant="h6" gutterBottom fontWeight={500} className="mb-20">
            Experiences
          </Typography>
          <IconButton aria-label="Add" variant="contained" size="small" className="rounded-32 p-0">
            <AddIcon />
          </IconButton>
        </div>
        <div className="flex flex-col">
          {experiences.map((exp, index)=> (
            <div className="flex flex-row mb-20">
              <Avatar variant="square" className="w-64 h-64 rounded-4" src={exp.employer.avatar}/>
              <div  className={clsx('flex flex-col w-full mx-24 pb-20', index===(experiences.length-1)?'':'border-b-1')} >
                <div>
                  <Typography variant="h6" fontWeight={600} className="text-16">
                    {exp.employmentTitle}
                  </Typography>
                </div>
                <Typography variant="body2">
                  {exp.employer.name}
                </Typography>
                <Typography variant="body2">
                  {exp.fromDate?dateFormat(new Date(exp.fromDate), "mmm yyyy"): ''} - {exp.thruDate?dateFormat(new Date(exp.thruDate), "mmm yyyy"):exp.isCurrent?'Present':''}
                </Typography>
                <Typography variant="body2" color={'text.secondary'}>
                  {exp.city + ', ' + exp.country}
                </Typography>
                {exp.description &&
                <Typography variant="body2" className="mt-14">
                  {exp.description}
                </Typography>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-24">
        <div className="flex flex-row justify-between">
          <Typography variant="h6" gutterBottom fontWeight={500} className="mb-20">
            Educations
          </Typography>
          <IconButton aria-label="Add" variant="outlined" size="small" className="rounded-32">
            <AddIcon />
          </IconButton>
        </div>
        <div className="flex flex-col">
          {educations.map((edu)=> (
            <div className="flex flex-row mb-20 ">
              <Avatar alt={edu.institute.name} variant="square" className="w-64 h-64 rounded-4" src={edu.institute.avatar}/>
              <div className="flex flex-col w-full mx-24 pb-20 border-b-1">
                <div>
                  <Typography variant="body2" fontWeight={600}>
                    {edu.institute.name}
                  </Typography>
                </div>
                {edu.degree &&
                <Typography variant="body2">
                  {edu.degree + ' - '}
                </Typography>
                }
                <Typography variant="body2" color={'text.secondary'}>
                  {edu.city + ', ' + edu.country}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default ExperiencesAndEducations;
