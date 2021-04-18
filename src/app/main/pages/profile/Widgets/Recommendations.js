import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import clsx from 'clsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  divider: {
    margin: '20px 0'
  }
}));

export default function Recommendations(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { recommendations, reviews, givens } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  console.log('reviews', reviews)
  if(!recommendations && !reviews &&   !givens){
    return null;
  }

  return (

    <Card className="w-full mb-16 rounded-8">
      <AppBar position="static" elevation={0} className="bg-transparent">
        <Toolbar className="px-8">
          <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
            Recommendations
          </Typography>
        </Toolbar>
      </AppBar>

      <CardContent>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Recommendations" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Given" {...a11yProps(2)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {recommendations && (
            <List className="p-0">
              {recommendations.recommendations.map((recommendation, idx) => (
                <div key={recommendation.id}>
                  <ListItem dense button>
                    <div className="flex flex-1 flex-col relative overflow-hidden">
                      <div className="flex items-center justify-between px-16 pb-8">
                        <div className="flex items-center">
                          {recommendation.reviewer.avatar ? (
                            <Avatar className="w-64 h-64" alt={recommendation.reviewer.name} src={buildPartyAvatarUrl(recommendation.reviewer)} />
                          ) : (
                            <Avatar className={classes.avatar + ' w-64 h-64'}>{recommendation.reviewer.name[0]}</Avatar>
                          )}
                          <div>
                            <Typography variant="subtitle1" className="mx-8">
                              {recommendation.reviewer.name}
                            </Typography>
                            <Typography className="truncate mx-8">{recommendation.reviewer.headline}</Typography>
                          </div>
                        </div>
                        <Typography variant="subtitle1">{recommendation.createdDate}</Typography>
                      </div>
                      <div className="flex flex-col px-16 py-0">

                        <Typography color="textSecondary" className="my-10 font-15">
                          {/*{_.truncate(recommendation.comment.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}*/}
                          {recommendation.comment}
                        </Typography>
                      </div>
                    </div>
                  </ListItem>
                  <Divider className={classes.divider}/>
                </div>
              ))}
            </List>
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {reviews && (
            <List className="p-0">
              {reviews.map((review, idx) => (
                <ListItem key={review.id} dense button>
                  <div className="flex flex-1 flex-col relative overflow-hidden">
                    <div className="flex items-center justify-between px-16 pb-8">
                      <div className="flex items-center">
                        {review.reviewer.avatar ? (
                          <Avatar className="w-64 h-64" alt={review.reviewer.name} src={buildPartyAvatarUrl(review.reviewer)} />
                        ) : (
                          <Avatar className={classes.avatar + ' w-64 h-64'}>{review.reviewer.name[0]}</Avatar>
                        )}
                        <div>
                          <Typography variant="subtitle1" className="mx-8">
                            {review.reviewer.name}
                          </Typography>
                          <Typography className="truncate mx-8">{review.reviewer.headline}</Typography>
                        </div>
                      </div>
                      <Typography variant="subtitle1">{review.createdDate}</Typography>
                    </div>
                    <div className="flex flex-col px-16 py-0">

                      <Typography color="textSecondary" className="my-10 font-15">
                        {/*{_.truncate(review.comment.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}*/}
                        {review.comment}
                      </Typography>
                    </div>
                    <Divider className={classes.divider}/>
                  </div>
                </ListItem>
              ))}
            </List>
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {givens && (
            <List className="p-0">
              {givens.recommendations.map((given, idx) => (
                <div key={given.id}>
                  <ListItem dense button>
                    <div className="flex flex-1 flex-col relative overflow-hidden">
                      <div className="flex items-center justify-between px-16 pb-8">
                        <div className="flex items-center">
                          {given.receiver.avatar ? (
                            <Avatar className="w-64 h-64" alt={given.receiver.name} src={buildPartyAvatarUrl(given.receiver)} />
                          ) : (
                            <Avatar className={classes.avatar + ' w-64 h-64'}>{given.receiver.name[0]}</Avatar>
                          )}
                          <div>
                            <Typography variant="subtitle1" className="mx-8">
                              {given.receiver.name}
                            </Typography>
                            <Typography className="truncate mx-8">{given.receiver.headline}</Typography>
                          </div>
                        </div>
                        <Typography variant="subtitle1">{given.createdDate}</Typography>
                      </div>
                      <div className="flex flex-col px-16 py-0">

                        <Typography color="textSecondary" className="truncate">
                          {_.truncate(given.comment.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
                        </Typography>
                      </div>
                      <Divider className={classes.divider}/>
                    </div>
                  </ListItem>
                </div>
              ))}
            </List>
            )}
          </TabPanel>
        </SwipeableViews>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          See more
        </Button>
      </CardActions>
    </Card>
  );
}
