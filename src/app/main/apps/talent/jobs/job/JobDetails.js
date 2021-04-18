import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import FuseChipSelect from '@fuse/core/FuseChipSelect';


import JobChip from '../JobChip';
import Widget1 from '../widgets/Widget1';
import Widget2 from '../widgets/Widget2';
import Widget3 from '../widgets/Widget3';
import Widget4 from '../widgets/Widget4';
import Widget9 from '../widgets/Widget9';
import Widget10 from '../widgets/Widget10';
import Widget11 from '../widgets/Widget11';
import Board from '../board/Board';


import { selectLabelsEntities, selectLabels } from '../store/labelsSlice';
import { getJob, addTags, addLabels, addSkills, } from '../store/jobSlice';
import { openCardDialog } from '../store/jobsSlice';
import { makeStyles, withStyles } from "@material-ui/core/styles/index";
import { updateCandidate } from "../../candidates/store/candidatesSlice";
import CandidatesList from '../candidates/CandidatesList';
import { Button, Link } from '@material-ui/core';
import { setTagsContext } from 'raven-js';
import MemberDialog from '../members/MemberDialog';








const options = [{ value: 'Change Status', icon: '' }, { value: 'Change Progress', icon: 'show_chart' }, { value: 'Change Rating', icon: 'star' }, { value: 'Archive', icon: 'archive' }];


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
    width: 'auto',
    minWidth: 'auto'
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


function JobDetails(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const job = useSelector(({ jobApp }) => jobApp.job);
  const skills = useSelector(({ jobApp }) => jobApp.skills);
  const tags = useSelector(({ jobApp }) => jobApp.tags);
  const labels = useSelector(selectLabels);


  const [value, setValue] = React.useState(0);
  const routeParams = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [anchorElLabel, setAnchorElLabel] = React.useState(null);
  const [anchorElTag, setAnchorElTag] = React.useState(null);
  const [anchorElSkill, setAnchorElSkill] = React.useState(null);
  const [selectedSkills, setSelectedSkills] = React.useState([]);
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedLabels, setSelectedLabels] = React.useState([]);



  useEffect(() => {
    if (job) {
      setSelectedSkills(job.skills.map((item) => { return { label: item, value: item } }));
      setSelectedTags(job.tags.map((item) => { return { label: item, value: item } }));
      setSelectedLabels(job.labels.map((item) => { return { label: item, value: item } }));
    }
  }, [job])

  const handleClose = () => {
    setAnchorElLabel(null);
    setAnchorElTag(null);
    setAnchorElSkill(null);
  }

  const widgets = [
    {
      id: 'widget1',
      ranges: {
        DY: 'Yesterday',
        DT: 'Today',
        DTM: 'Tomorrow'
      },
      currentRange: 'DT',
      data: {
        label: '',
        count: {
          DY: 21,
          DT: 25,
          DTM: 19
        },
        extra: {
          label: 'Pipeline',
          count: {
            DY: 6,
            DT: 7,
            DTM: '-'
          }
        }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget2',
      title: 'Viewed',
      data: {
        label: '',
        count: 4,
        extra: {
          label: "Applied",
          count: 2
        }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget3',
      title: 'Liked',
      data: {
        label: '',
        count: 32,
        extra: {
          label: 'Applied',
          count: 0
        }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget4',
      title: 'Saved',
      data: {
        label: '',
        count: 42,
        extra: {
          label: 'Applied',
          count: 8
        }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget9',
      title: 'Spent',
      ranges: {
        TW: 'This Week',
        LW: 'Last Week',
        '2W': '2 Weeks Ago'
      },
      currentRange: 'TW',
      weeklySpent: {
        title: 'WEEKLY SPENT',
        count: {
          '2W': '2,682.85',
          LW: '1,445.34',
          TW: '3,630.15'
        },
        chart: {
          '2W': {
            datasets: [
              {
                label: 'Created',
                data: [2, 6, 5, 4, 5, 3, 6],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          LW: {
            datasets: [
              {
                label: 'Created',
                data: [4, 6, 2, 2, 1, 3, 4],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          TW: {
            datasets: [
              {
                label: 'Created',
                data: [2, 6, 5, 4, 5, 3, 6],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          options: {
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false
                }
              ]
            }
          }
        }
      },
      totalSpent: {
        title: 'TOTAL SPENT',
        count: {
          '2W': '29,682.85',
          LW: '31,128.19',
          TW: '34,758.34'
        },
        chart: {
          '2W': {
            datasets: [
              {
                label: 'Created',
                data: [3, 2, 2, 4, 7, 7, 4],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          LW: {
            datasets: [
              {
                label: 'Created',
                data: [5, 7, 8, 8, 6, 4, 1],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          TW: {
            datasets: [
              {
                label: 'Created',
                data: [6, 4, 7, 5, 5, 4, 7],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          options: {
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false
                }
              ]
            }
          }
        }
      },
      remaining: {
        title: 'REMAINING',
        count: {
          '2W': '94.317,15',
          LW: '92.871,81',
          TW: '89.241,66'
        },
        chart: {
          '2W': {
            datasets: [
              {
                label: 'Created',
                data: [1, 4, 5, 7, 8, 2, 4],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          LW: {
            datasets: [
              {
                label: 'Created',
                data: [3, 2, 1, 4, 8, 8, 4],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          TW: {
            datasets: [
              {
                label: 'Created',
                data: [2, 4, 8, 6, 2, 5, 1],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ],
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          options: {
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false
                }
              ]
            }
          }
        }
      },
      totalBudget: {
        title: 'TOTAL BUDGET',
        count: '124.000,00'
      }
    },
    {
      id: 'widget10',
      title: 'Budget Details',
      table: {
        columns: [
          {
            id: 'budget_type',
            title: 'Budget Type'
          },
          {
            id: 'total_budget',
            title: 'Total Budget'
          },
          {
            id: 'spent_usd',
            title: 'Spent ($)'
          },
          {
            id: 'spent_perc',
            title: 'Spent (%)'
          },
          {
            id: 'remaining_usd',
            title: 'Remaining ($)'
          },
          {
            id: 'remaining_perc',
            title: 'Remaining (%)'
          }
        ],
        rows: [
          {
            id: 1,
            cells: [
              {
                id: 'budget_type',
                value: 'Feed',
                classes: 'bg-blue text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$14,880.00',
                classes: 'font-bold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$14,000.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%94.08',
                classes: 'text-green',
                icon: 'trending_up'
              },
              {
                id: 'remaining_usd',
                value: '$880.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%5.92',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 2,
            cells: [
              {
                id: 'budget_type',
                value: 'Job Landing',
                classes: 'bg-green text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$21,080.00',
                classes: 'font-bold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$17,240.34',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%81.78',
                classes: 'text-green',
                icon: 'trending_up'
              },
              {
                id: 'remaining_usd',
                value: '$3,839.66',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%18.22',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 3,
            cells: [
              {
                id: 'budget_type',
                value: 'Popular',
                classes: 'bg-red text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$34,720.00',
                classes: 'font-bold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$3,518.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%10.13',
                classes: 'text-red',
                icon: 'trending_down'
              },
              {
                id: 'remaining_usd',
                value: '$31,202.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%89.87',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 4,
            cells: [
              {
                id: 'budget_type',
                value: 'Email',
                classes: 'bg-pink text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$34,720.00',
                classes: 'font-bold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$0.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%0.00',
                classes: 'text-blue',
                icon: 'trending_flat'
              },
              {
                id: 'remaining_usd',
                value: '$34,720.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%100.00',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 5,
            cells: [
              {
                id: 'budget_type',
                value: 'Extra',
                classes: 'bg-orange text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$18,600.00',
                classes: 'font-bold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$0.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%0.00',
                classes: 'text-blue',
                icon: 'trending_flat'
              },
              {
                id: 'remaining_usd',
                value: '$34,720.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%100.00',
                classes: '',
                icon: ''
              }
            ]
          }
        ]
      }
    },
    {
      id: 'widget11',
      title: 'New Candidates',
      table: {
        columns: [
          {
            id: 'avatar',
            title: ''
          },
          {
            id: 'name',
            title: 'Name'
          },
          {
            id: 'position',
            title: 'Position'
          },
          {
            id: 'office',
            title: 'Office'
          },
          {
            id: 'email',
            title: 'Email'
          },
          {
            id: 'phone',
            title: 'Phone'
          }
        ],
        rows: [
          {
            id: 1,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/james.jpg'
              },
              {
                id: 'name',
                value: 'Jack Gilbert'
              },
              {
                id: 'position',
                value: 'Design Manager'
              },
              {
                id: 'office',
                value: 'Johor Bahru'
              },
              {
                id: 'email',
                value: 'jgilbert48@mail.com'
              },
              {
                id: 'phone',
                value: '+16 298 032 7774'
              }
            ]
          },
          {
            id: 2,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/katherine.jpg'
              },
              {
                id: 'name',
                value: 'Kathy Anderson'
              },
              {
                id: 'position',
                value: 'Recruiting Manager'
              },
              {
                id: 'office',
                value: 'Solţānābād'
              },
              {
                id: 'email',
                value: 'kanderson49@mail.com.br'
              },
              {
                id: 'phone',
                value: '+23 572 311 1136'
              }
            ]
          },
          {
            id: 3,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/garry.jpg'
              },
              {
                id: 'name',
                value: 'Gary Gonzalez'
              },
              {
                id: 'position',
                value: 'Speech Pathologist'
              },
              {
                id: 'office',
                value: 'Gangkou'
              },
              {
                id: 'email',
                value: 'ggonzalez4r@mail.cc'
              },
              {
                id: 'phone',
                value: '+10 862 046 7916'
              }
            ]
          },
          {
            id: 4,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/andrew.jpg'
              },
              {
                id: 'name',
                value: 'Mark Turner'
              },
              {
                id: 'position',
                value: 'Recruiting Manager'
              },
              {
                id: 'office',
                value: 'Neftegorsk'
              },
              {
                id: 'email',
                value: 'mturner4a@mail.com'
              },
              {
                id: 'phone',
                value: '+01 139 803 9263'
              }
            ]
          },
          {
            id: 5,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/jane.jpg'
              },
              {
                id: 'name',
                value: 'Kathryn Martinez'
              },
              {
                id: 'position',
                value: 'Director of Sales'
              },
              {
                id: 'office',
                value: 'Palekastro'
              },
              {
                id: 'email',
                value: 'kmartinez4b@mail.com'
              },
              {
                id: 'phone',
                value: '+25 467 022 5393'
              }
            ]
          },
          {
            id: 6,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/alice.jpg'
              },
              {
                id: 'name',
                value: 'Annie Gonzales'
              },
              {
                id: 'position',
                value: 'Actuary'
              },
              {
                id: 'office',
                value: 'Candon'
              },
              {
                id: 'email',
                value: 'agonzales4c@mail.edu'
              },
              {
                id: 'phone',
                value: '+99 891 619 7138'
              }
            ]
          },
          {
            id: 7,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/vincent.jpg'
              },
              {
                id: 'name',
                value: 'Howard King'
              },
              {
                id: 'position',
                value: 'Human Resources'
              },
              {
                id: 'office',
                value: 'Bergen op Zoom'
              },
              {
                id: 'email',
                value: 'hking4d@mail.gov'
              },
              {
                id: 'phone',
                value: '+46 984 348 1409'
              }
            ]
          },
          {
            id: 8,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/joyce.jpg'
              },
              {
                id: 'name',
                value: 'Elizabeth Dixon'
              },
              {
                id: 'position',
                value: 'Electrical Engineer'
              },
              {
                id: 'office',
                value: 'Písečná'
              },
              {
                id: 'email',
                value: 'edixon4e@mail.gov'
              },
              {
                id: 'phone',
                value: '+33 332 067 9063'
              }
            ]
          },
          {
            id: 9,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/danielle.jpg'
              },
              {
                id: 'name',
                value: 'Dorothy Morris'
              },
              {
                id: 'position',
                value: 'Office Assistant'
              },
              {
                id: 'office',
                value: 'Magsaysay'
              },
              {
                id: 'email',
                value: 'dmorris4f@mail.com'
              },
              {
                id: 'phone',
                value: '+05 490 958 6120'
              }
            ]
          },
          {
            id: 10,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/carl.jpg'
              },
              {
                id: 'name',
                value: 'Mark Gonzales'
              },
              {
                id: 'position',
                value: 'Quality Control'
              },
              {
                id: 'office',
                value: 'Matsue-shi'
              },
              {
                id: 'email',
                value: 'mgonzales4g@mail.com'
              },
              {
                id: 'phone',
                value: '+03 168 394 9935'
              }
            ]
          }
        ]
      }
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useDeepCompareEffect(() => {
    dispatch(getJob(routeParams));
  }, [dispatch, routeParams]);

  if (!job) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={'relative overflow-hidden p-16 sm:p-24 '}>

        <div className="flex flex-col">
          <div className="pl-10 justify-center">
            <Typography variant="h6" className="font-medium" color="primary">
              {job.title}
            </Typography>
            <Typography color="textSecondary" className="truncate">
              {job.city}, {job.state}
            </Typography>
          </div>
        </div>
      </div>
      <AppBar position="static" color="default" className="bg-transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Board" {...a11yProps(0)} />
          <Tab label="Candidates" {...a11yProps(1)} />
          <Tab label="Detail" {...a11yProps(2)} />
          <Tab label="Insight" {...a11yProps(3)} />
          <Tab label="Activity" {...a11yProps(4)} />
          <Tab label="Documents" {...a11yProps(5)} />
          <Tab label="Payment" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={3}>
        <div className="flex flex-wrap">
          <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
            <Widget1 widget={widgets[0]} />
          </div>
          <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
            <Widget2 widget={widgets[1]} />
          </div>
          <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
            <Widget3 widget={widgets[2]} />
          </div>
          <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
            <Widget4 widget={widgets[3]} />
          </div>
          <div className="widget flex w-full p-12">
            <Widget9 widget={widgets[4]} />
          </div>
          <div className="widget flex w-full p-12">
            <Widget10 widget={widgets[5]} />
          </div>
          <div className="widget flex w-full p-12">
            <Widget11 widget={widgets[6]} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>

        <div className={'relative overflow-hidden p-16 sm:p-24 '}>
          <div className="flex sm:flex-row flex-wrap">
            <div className="flex flex-1 mt-5">
              <Avatar className="w-56 h-56" src={job.createdBy.avatar} alt={job.createdBy.firstName}>
                {!job.createdBy.avatar || job.createdBy.avatar === '' ? job.company.firstName[0] : ''}
              </Avatar>
              <div className="pl-20 mt-10">
                <Typography>{job.createdBy.firstName} {job.createdBy.lastName}</Typography>
                <Typography className="font-bold mb-4 text-15">{job.company.name}</Typography>
              </div>
            </div>

            <div className="flex  flex-1 mt-5" >
              {job.members && job.members.map(item => (
                <Avatar className=" ml-5 w-32 h-32" src={item.avatar} alt={item.firstName}>
                </Avatar>

              ))}
              <Chip
                variant="outlined"
                size="small"
                icon={<Icon>add</Icon>}
                label=""
                className="my-5 mx-5 pl-5 pb-5"
                onClick={ev => dispatch(openCardDialog(job.members))}
              ></Chip>
            </div>
          </div>
          <Typography className="font-bold mt-10 text-15">
            Details
            </Typography>
          <div className="flex sm:flex-row flex-wrap mt-5">

            <div className="flex flex-1">
              <table>
                <tr className="type">

                  <td className={classes.tableTD}>Starting date:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.requiredOnDate}</td>
                </tr>

                <tr className="size">
                  <td className={classes.tableTD}>Ending Date:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.expirationDate}</td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Created:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.createdDate}</td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Min Experience:</td>
                  <td className={classes.tableTD + ` pl-20`}>
                    {job.minMonthExperience >= 12
                      ? Math.round(job.minMonthExperience / 12) + ' years'
                      : Math.round(job.minMonthExperience) + ' months'}
                  </td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Max Experience:</td>
                  <td className={classes.tableTD + ` pl-20`}>
                    {job.maxMonthExperience >= 12
                      ? Math.round(job.maxMonthExperience / 12) + ' years'
                      : Math.round(job.maxMonthExperience) + ' months'}
                  </td>
                </tr>

                <tr className="size">
                  <td className={classes.tableTD}>Level:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.level.name}</td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Category:</td>
                  <td className={classes.tableTD + ` pl-20`}></td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Job Function:</td>
                  <td className={classes.tableTD + ` pl-20`}></td>
                </tr>

              </table>
            </div>
            <div className="flex flex-1">
              <table>
                <tr className="type">

                  <td className={classes.tableTD}>Currency:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.currency}</td>
                </tr>

                <tr className="size">
                  <td className={classes.tableTD}>Min Income:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.salaryRangeLow}</td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Max Income:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.salaryRangeHigh}</td>
                </tr>
                <tr className="size">
                  <td className={classes.tableTD}>Vacancies:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.noOfResources}</td>
                </tr>

                <tr className="size">
                  <td className={classes.tableTD}>Ref. Number:</td>
                  <td className={classes.tableTD + ` pl-20`}>{job.jobId}</td>
                </tr>


              </table>

            </div>
          </div>
          <div className="mt-20 flex sm:flex-col flex-wrap">
            <Typography className="font-bold mb-4 text-15">
              Description
            </Typography>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            {/* {
              job.skills && job.skills.length > 0 ? */}
            <div className="mt-20 w-full">
              <Typography className="font-bold mb-4 text-15">Skills</Typography>
              <div className="flex">
                {job.skills && job.skills.length > 0 ? job.skills.map(item => (
                  <Chip
                    variant="default"
                    size="small"
                    label={item}
                    className="my-5 mr-10"
                    color="secondary"
                  ></Chip>
                )):<p>No skills yet</p>}
              </div>
            </div>
            {/* : null
            } */}
            {/* {job.tags && job.tags.length > 0 ? */}
            <div className="flex flex-wrap">
              <div className="flex-1 mt-20 mb-20">
                <Typography className="font-bold mb-4 text-15">TAGS</Typography>
                <div className="flex">

                   {job.tags && job.tags.length > 0 ? job.tags.map(item => (
                    <Chip
                      variant="default"
                      size="small"
                      label={item}
                      className="my-5 mr-5"
                    ></Chip>
                  )):<p>No tags yet</p>}
                </div>
              </div>
              {/* : null} */}

              <div className="flex-1 mt-20 mb-20">
                <Typography className="font-bold mb-4 text-15">Labels</Typography>
                <div className="flex">

                   {job.labels && job.labels.length > 0 ? job.labels.map(item => (
                    <Chip
                      variant="default"
                      size="small"
                      label={item}
                      className="my-5 mr-5"
                    ></Chip>
                  )):<p>No labels yet</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <CandidatesList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={0}>
        <Board />
      </TabPanel>

      <Menu
        id="label-action-menu"
        anchorEl={anchorElLabel}
        keepMounted
        open={Boolean(anchorElLabel)}
        onClose={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleClose(event);
        }}
      >
        <div className="flex flex-col w-full max-w-sm min-w-320 ">
          <FuseChipSelect
            className="w-full my-16 px-16"
            placeholder="Select labels"
            value={selectedLabels}
            onChange={setSelectedLabels}
            textFieldProps={{
              label: 'Labels',
              InputLabelProps: {
                shrink: true
              },
              variant: 'standard'
            }}
            options={labels && labels.data && labels.data.map((item) => { return { label: item.name, value: item.id } })}
            isMulti
          />

          <Button onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            dispatch(addLabels(selectedLabels))
            setSelectedLabels([]);
            handleClose(event);
          }}>Send</Button>
        </div>
      </Menu>
      <Menu
        id="tag-action-menu"
        anchorEl={anchorElTag}
        keepMounted
        open={Boolean(anchorElTag)}
        onClose={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleClose(event);
        }}
      >
        <div className="flex flex-col w-full max-w-sm min-w-320 ">
          <FuseChipSelect
            className="w-full my-16 px-16"
            placeholder="Select tags"
            value={selectedTags}
            onChange={setSelectedTags}
            textFieldProps={{
              label: 'Tags',
              InputLabelProps: {
                shrink: true
              },
              variant: 'standard'
            }}
            options={tags && tags.data && tags.data.map((item) => { return { label: item.name, value: item.id } })}
            isMulti
          />

          <Button onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            dispatch(addTags(selectedTags))
            setSelectedTags([]);
            handleClose(event);
          }}>Send</Button>
        </div>
      </Menu>
      <Menu
        id="skill-action-menu"
        anchorEl={anchorElSkill}
        keepMounted
        open={Boolean(anchorElSkill)}
        onClose={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleClose(event);
        }}

      >

        <div className="flex flex-col w-full max-w-sm min-w-320 h-full">
          <FuseChipSelect
            className="w-full my-16 px-16"
            placeholder="Select skills"
            value={selectedSkills}
            onChange={setSelectedSkills}
            textFieldProps={{
              label: 'Skills',
              InputLabelProps: {
                shrink: true
              },
              variant: 'standard'
            }}
            options={skills && skills.data && skills.data.map((item) => { return { label: item.name, value: item.id } })}
            isMulti
          />

          <Button onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            dispatch(addSkills(selectedSkills))
            setSelectedSkills([]);
            handleClose(event);
          }}>Send</Button>
        </div>

      </Menu>
      <MemberDialog />
    </div >
  );
}

export default withRouter(JobDetails);
