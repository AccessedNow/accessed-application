import { useForm } from '@fuse/hooks';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActivity } from '../store/activitySlice';
import { Card, Chip, Divider, CardContent, CardHeader, Link, CardActions,Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import CandidateHeader from './CandidateHeader';
import ActivitiesList from '../activities/ActivitiesList';
import { dateDifference } from 'app/utils/helper';



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


function CandidateDetail(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const filter = {};

const activities = useSelector(selectActivity);
  const selectedItemId = useSelector(state => state.jobApp.candidates.selectedItemId);
  const selectedItem = useSelector(state => state.jobApp.candidates.selected);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSkillClick = (skill) => {
    let data = {
      experience: filter.experience,
      skill: [skill],
      location: filter.location,
      industry: filter.industry,
      level: filter.level,
      rating: filter.rating,
      salary: filter.salary
    };
    // dispatch(updateFilter(data));
    // dispatch(getCandidates(data));
  }

  const handleTagsClick = (tag) => {
    let data = {
      experience: filter.experience,
      skill: filter.skill,
      location: filter.location,
      industry: filter.industry,
      level: filter.level,
      rating: filter.rating,
      salary: filter.salary,
      tag: [tag]
    };
    // dispatch(updateFilter(data));
    // dispatch(getCandidates(data));
  }
  if (!selectedItem) {
    return null;
  }

  return (
    <div className={classes.root}>
      <CandidateHeader />
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
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Emails" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
          <Tab label="Files" {...a11yProps(3)} />
          <Tab label="Activity" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {selectedItem && selectedItem.applicant &&
          <>
            <Card>
              <CardHeader
                title="General Information">

              </CardHeader>
              <CardContent>
                <div className={'relative overflow-hidden p-16 sm:p-24 '}>
                  <table className={'w-full text-justify'}>
                    <tbody>
                      <tr className="type">
                        <td className={classes.tableTD}><b>Tags</b></td>
                        <td className={classes.tableTD}>
                          <div >

                            <div className="flex">
                              {selectedItem.applicant.tags.map(item => (
                                <Chip
                                  variant="default"
                                  size="small"
                                  label={item.name}
                                  className="my-5 mx-5"
                                ></Chip>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="location">
                        <td className={classes.tableTD}>
                          <b>Email Address</b>
                        </td>
                        <td className={classes.tableTD + " p-10"}>
                          {selectedItem.email}
                        </td>
                      </tr>
                      <tr className="size">
                        <td className={classes.tableTD}><b>Mobile Number</b></td>
                        <td className={classes.tableTD + " p-10"}>{selectedItem.phoneNumber}</td>
                      </tr>
                      <tr className="type">
                        <td className={classes.tableTD}><b>Sources</b></td>
                        <td className={classes.tableTD}>
                          <div>

                            <div className="flex">
                              {selectedItem.sources && selectedItem.sources.map(item => (
                                <Chip
                                  variant="default"
                                  size="small"
                                  label={item.type}

                                  className="my-5 mx-5"
                                ></Chip>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="type">
                        <td className={classes.tableTD}><b>Links</b></td>
                        <td className={classes.tableTD}>
                          <div >

                            <div className="flex">
                              {selectedItem.applicant.links.map(item => (
                                <Chip
                                  variant="default"
                                  size="small"
                                  label={item.type}

                                  className="my-5 mx-5"
                                ></Chip>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </CardContent>
              <CardActions>
                <Divider />
                <Button component={Link}>
                  Add Comments Field
                </Button>
              </CardActions>
            </Card>
            <Card className="mt-12">
              <CardHeader
                title="Recent Activity">

              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {
                      activities && activities.map((item) => (
                        <TableRow>
                          <TableCell className="flex items-center justify-between">
                            <div className="flex items-center justify-between">
                              <Avatar src={item.actor.avatar} alt={item.actor.firstName} />
                              <span className="ml-5"><b>{item.actor.firstName}  {item.actor.lastName}</b> {item.verb} <b>{item.target.displayName}</b></span>
                            </div>
                            <div>
                              {dateDifference(item.createdDate) + "d"}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                    <TableRow clasName="text-center"><Button variant="outlined"
                      onClick={(e) => { handleChange(e, 4); window.scrollTo(0, 0); }} className="mt-10">Show More</Button></TableRow>
                  </TableBody>
                </Table>
              </CardContent>

            </Card>
          </>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ActivitiesList />
      </TabPanel>
    </div>

  );
}

export default CandidateDetail;
