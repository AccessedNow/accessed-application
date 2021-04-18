import { useForm } from '@fuse/hooks';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobsById } from '../store/jobsSlice';
import { Chip, Divider } from '@material-ui/core';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget9 from './widgets/Widget9';
import Widget10 from './widgets/Widget10';
import Widget11 from './widgets/Widget11';

import { openCheckAvailabilityeDialog, setSelectedItem, updateCandidate } from "../../candidates/store/candidatesSlice";
import { withStyles } from "@material-ui/core/styles/index";

const options = [{ value: 'Change Status', icon: '' }, { value: 'Change Progress', icon: 'show_chart' }, { value: 'Change Rating', icon: 'star' }, { value: 'Archive', icon: 'archive' }];

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#faeaa8'
  }
}))(LinearProgress);

const ThreeDotsMenu = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  function handleMenuClick(index, row) {
    console.log(row);
    if (index === 0) {
      let candidate = row;
      //candidate.applicant.status = !candidate.applicant.status;
      dispatch(updateCandidate(candidate))
    }
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const { data } = props;
  return (
    <>
      <IconButton onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        handleClick(event);
      }}>
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        id="card-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleClose(event);
        }}
      >
        {
          options.map((option, index) => (
            <MenuItem onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleMenuClick(index, data)
            }}>
              <Icon className="mr-10" fontSize="small">{option.icon}</Icon>
              {option.value}
            </MenuItem>
          ))
        }

      </Menu>
    </>
  )
}


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


function JobDetail(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const selectedItem = useSelector(({ jobsSearchApp }) => jobsSearchApp.jobs.selectedItem);

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


  if (!selectedItem) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={'relative overflow-hidden p-16 sm:p-24 '}>
        <div className="flex">
          <Avatar className="w-16 h-16 mt-5">

          </Avatar>
          <div className="pl-10 justify-center">
            <Typography>
              {selectedItem.title}
            </Typography>
            <Typography>
              {
                selectedItem.city
              },
                {
                selectedItem.country
              }
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
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="Candidates" {...a11yProps(1)} />
          <Tab label="Board" {...a11yProps(2)} />
          <Tab label="Activity" {...a11yProps(3)} />
          <Tab label="Share" {...a11yProps(4)} />
          <Tab label="Documents" {...a11yProps(5)} />
          <Tab label="Payment" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
      <TabPanel value={value} index={1}>

        <div className={'relative overflow-hidden p-16 sm:p-24 '}>
          <div className="flex">
            <Avatar className="w-56 h-56" src={selectedItem.company.avatar} alt={selectedItem.company.name}>
              {!selectedItem.company.avatar || selectedItem.company.avatar === '' ? selectedItem.company.name[0] : ''}
            </Avatar>
            <div className="pl-20 mt-10">
              <Typography>
                Owner
          </Typography>
              <Typography className="font-bold mb-4 text-15">
                {
                  selectedItem.company.name
                }
              </Typography>
            </div>

          </div>

          <table className={'w-full text-justify mt-20'}>
            <thead>
              <tr>
                <th colspan="2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tr className="type">

                      <td className={classes.tableTD}>Starting date:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.requiredOnDate}</td>
                    </tr>

                    <tr className="size">
                      <td className={classes.tableTD}>Ending Date:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.expirationDate}</td>
                    </tr>
                    <tr className="size">
                      <td className={classes.tableTD}>Created:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.createdDate}</td>
                    </tr>
                    <tr className="size">
                      <td className={classes.tableTD}>Min Experience:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.minMonthExperience / 12} years</td>
                    </tr>
                    <tr className="size">
                      <td className={classes.tableTD}>Max Experience:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.maxMonthExperience / 12} years</td>
                    </tr>

                    <tr className="size">
                      <td className={classes.tableTD}>Level:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.level.name}</td>
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
                </td>
                <td valign="top">
                  <table>
                    <tr className="type">

                      <td className={classes.tableTD}>Currency:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.currency}</td>
                    </tr>

                    <tr className="size">
                      <td className={classes.tableTD}>Min Income:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.salaryRangeLow}</td>
                    </tr>
                    <tr className="size">
                      <td className={classes.tableTD}>Max Income:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.salaryRangeHigh}</td>
                    </tr>
                    <tr className="size">
                      <td className={classes.tableTD}>Vacancies:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.noOfResources}</td>
                    </tr>

                    <tr className="size">
                      <td className={classes.tableTD}>Ref. Number:</td>
                      <td className={classes.tableTD + ` pl-20`}>{selectedItem.jobId}</td>
                    </tr>


                  </table>

                </td>
              </tr>

            </tbody>
          </table>
          <div className="mt-20">
            <Typography className="font-bold mb-4 text-15">
              Description
          </Typography>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

            <div className="mt-20">
              <Typography>SKILLS</Typography>
              <div className="flex flex-wrap">
                {selectedItem.skills.map(item => (
                  <Chip
                    variant="default"
                    size="small"
                    label={item.name}
                    className="my-5 mx-5"
                    color="secondary"
                  ></Chip>
                ))}
              </div>
            </div>


            <div className="mt-20 mb-20">
              <Typography className="font-bold mb-4 text-15">TAGS</Typography>
              <div className="flex">
                {selectedItem.tags.map(item => (
                  <Chip
                    variant="default"
                    size="small"
                    label={item}
                    className="my-5 mx-5"
                  ></Chip>
                ))}
              </div>
            </div>

            <div className="mt-20 mb-20">
              <Typography className="font-bold mb-4 text-15">Labels</Typography>
              <div className="flex">
                {selectedItem.labels.map(item => (
                  <Chip
                    variant="default"
                    size="small"
                    label={item}
                    className="my-5 mx-5"
                  ></Chip>
                ))}
              </div>
            </div>

          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Six
      </TabPanel>

    </div>

  );
}

export default JobDetail;
