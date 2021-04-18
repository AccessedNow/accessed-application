import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseChipSelect from '@fuse/core/FuseChipSelect';

import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import { useParams } from 'react-router-dom';
import { green, pink } from '@material-ui/core/colors';

import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect, useForm } from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';

import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import clsx from 'clsx';
import {formatNumberShortHand} from 'app/utils/helper';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  chip: {
    padding: theme.spacing(2),
    marginBottom: 5
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  listItem: {
    padding: 0
  },
  members: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },

}));

function JobDetail() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const pageLayout = useRef(null);
  const classes = useStyles();

  const job = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.job);
  const panelist = [
    {
      id: '56027c1930450d8bf7b10758',
      name: 'Alice Freeman',
      avatar: 'assets/images/avatars/alice.jpg'
    },
    {
      id: '26027s1930450d8bf7b10828',
      name: 'Danielle Obrien',
      avatar: 'assets/images/avatars/danielle.jpg'
    },
    {
      id: '76027g1930450d8bf7b10958',
      name: 'James Lewis',
      avatar: 'assets/images/avatars/james.jpg'
    },
    {
      id: '36027j1930450d8bf7b10158',
      name: 'John Doe',
      avatar: 'assets/images/avatars/Velazquez.jpg'
    }
  ];


  const { form: cardForm, handleChange, setForm, setInForm } = useForm(job);

  function chipChange(name, value) {
    setInForm(
      name,
      value.map(item => item.value)
    );
  }


  if(!job){
    return <FuseLoading/>
  }

  return (
    <>
      <FusePageSimple
        classes={{
          contentWrapper: 'p-0 pb-80',
          content: 'w-full w-1/3 min-h-full',
          header: 'min-h-72 h-72'
        }}
        content={
          <div>
            <div className="flex w-full items-center">
              <div className="flex flex-col md:w-1/2 pr-32">
                <div className="flex items-center mt-16 mb-12">
                  <Icon className="text-20" color="inherit">
                    supervisor_account
                  </Icon>
                  <Typography className="font-600 text-16 mx-8">Members</Typography>
                </div>
                {job.panelist && (
                <FuseChipSelect className=""
                  value={job.panelist.map(member => {
                    return (
                          <Tooltip title={member.name}>
                            <Avatar
                              className="ltr:-ml-12 rtl:-mr-12 w-32 h-32"
                              src={buildPartyAvatarUrl(member)}
                            />
                          </Tooltip>
                        )
                  })}
                  onChange={value => chipChange('idMembers', value)}

                  placeholder="Select multiple Members"
                  isMulti
                  textFieldProps={{
                    variant: 'standard'
                  }}
                  options={panelist.map(member => ({
                    value: member.id,
                    label: (
                      <span className="flex items-center">
											<Avatar key={member.id} className="w-32 h-32" src={member.avatar} />
											<span className="mx-8">{member.name}</span>
										</span>
                    )
                  }))}
                  variant="fixed"
                />
                )}
              </div>
              <div className="flex w-full md:w-1/2">
                <div className="flex flex-row w-full items-center mt-16 mb-12">
                  <Icon className="text-20" color="inherit">
                    supervisor_account
                  </Icon>
                  <Typography className="font-600 text-16 mx-8">Owner</Typography>
                </div>
                <div className="flex flex-row">
                  <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />
                  <IconButton aria-label="add" variant="contained" color="primary">
                    <EditIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <Typography variant="subtitle1" color="primary" className="flex-1 pt-32 font-medium">
              Detail
            </Typography>
            <div className="flex w-full items-center">
              <div className="flex flex-col w-full md:w-1/2">
                <div className="flex">
                  <div className="flex flex-1 w-2/4 md:w-1/4">
                    <Typography className="font-bold mb-4 text-14">Created Date</Typography>
                  </div>
                  <div className="flex flex-end w-2/4 md:w-3/4 justify-end md:justify-start md:text-left">{job.createdDate}</div>
                </div>
                <div className="flex">
                  <div className="flex flex-1 w-2/4 md:w-1/4">
                    <Typography className="font-bold mb-4 text-14">Starting Date</Typography>
                  </div>
                  <div className="flex flex-end w-2/4 md:w-3/4 justify-end md:justify-start md:text-left">25.7.2020</div>
                </div>
                <div className="flex">
                  <div className="flex flex-1 w-2/4 md:w-1/4">
                    <Typography className="font-bold mb-4 text-14">End Date</Typography>
                  </div>
                  <div className="flex flex-end w-2/4 md:w-3/4 justify-end md:justify-start md:text-left">25.7.2020</div>
                </div>
                <div className="flex">
                  <div className="flex flex-1 w-2/4 md:w-1/4">
                    <Typography className="font-bold mb-4 text-14">Vacancies</Typography>
                  </div>
                  <div className="flex flex-end w-2/4 md:w-3/4 justify-end md:justify-start md:text-left">3</div>
                </div>
                <div className="flex">
                  <div className="flex flex-1 w-2/4 md:w-1/4">
                    <Typography className="font-bold mb-4 text-14">Ref. Number</Typography>
                  </div>
                  <div className="flex flex-end w-2/4 md:w-3/4 justify-end md:justify-start md:text-left">{job.jobId}</div>
                </div>
                <div className="flex">
                  <div className="flex flex-1 w-2/4 md:w-1/4">
                    <Typography className="font-bold mb-4 text-14">Location</Typography>
                  </div>
                  <div className="flex flex-end w-2/4 md:w-3/4 justify-end md:justify-start md:text-left">{job.city}, {job.country}</div>
                </div>
                <div className="flex flex-wrap">
                    {job.skills && job.skills.map((skill, idx) => (
                      <Chip
                        color="primary"
                        label={skill.name}
                        className={classes.chip}
                      />
                    ))}
                </div>
              </div>
              <div className="flex flex-col md:w-1/2">
                <div className="flex">
                  <div className="w-1/3"><Typography className="font-bold mb-4 text-14">Currency</Typography></div>
                  <div className="flex flex-end">USD</div>
                </div>

                <div className="flex">
                  <div className="w-1/3"><Typography className="font-bold mb-4 text-14">Min Income</Typography></div>
                  <div className="flex flex-end">{formatNumberShortHand(job.salaryRangeLow)}</div>
                </div>

                <div className="flex w-full">
                  <div className="w-1/3"><Typography className="font-bold mb-4 text-14">Max Income</Typography></div>
                  <div className="flex flex-end">{formatNumberShortHand(job.salaryRangeHigh)}</div>
                </div>

                <div className="flex w-full">
                  <div className="w-1/3"><Typography className="font-bold mb-4 text-14">Fee Type</Typography></div>
                  <div className="flex flex-end">{job.jobId}</div>
                </div>

                <div className="flex w-full">
                  <div className="w-1/3"><Typography className="font-bold mb-4 text-14">Fee</Typography></div>
                  <div className="flex flex-end">3%</div>
                </div>
                <div className="flex w-full">
                  <div className="w-1/3"><Typography className="font-bold mb-4 text-14">Vendor</Typography></div>
                  <div className="flex flex-end"></div>
                </div>
              </div>
            </div>


            <div className="">
              <Typography variant="subtitle1" color="primary" className="flex-1 pt-32 font-medium">
                Role Overview
              </Typography>
              <Typography variant="body1" color="primary" className="flex-1">
                {job.description}
              </Typography>

              <Typography variant="subtitle1" color="primary" className="flex-1 pt-20 font-medium">
                Qualifications
              </Typography>
              {job.qualifications && (
                <List className="px-20">
                  {job.qualifications.map((qualification, idx) => (
                    <ListItem key={idx} className={classes.listItem} alignItems="flex-start">
                      <ListItemText primary={qualification} className="pl-10"/>
                    </ListItem>
                  ))}
                </List>
              )}

              <Typography variant="subtitle1" color="primary" className="flex-1 pt-20 font-medium">
                Responbilities
              </Typography>
              {job.responsibilities && (
                <List className="px-20">
                  {job.responsibilities.map((responsbility, idx) => (
                    <ListItem key={idx} className={classes.listItem} alignItems="flex-start">
                      <ListItemText primary={responsbility} className="pl-10" />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          </div>
        }      />
    </>
	);
}

export default JobDetail;
