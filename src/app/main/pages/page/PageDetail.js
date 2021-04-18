import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import FuseLoading from '@fuse/core/FuseLoading';
import {useDispatch, useSelector} from 'react-redux';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useEffect, useState } from 'react';
import AboutTab from './tabs/AboutTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import ReviewsTab from './tabs/ReviewsTab';
import JobsTab from './tabs/JobsTab';
import SalariesTab from './tabs/SalariesTab';
import PagesTab from './tabs/PagesTab';

import TimelineTab from './tabs/TimelineTab';
import Ad from '../../../components/Ad/Ad';
import PopularGroup from './Widgets/PopularGroup';
import Followers from '../../../components/Followers/Followers';
import PageHeader from './PageHeader';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import { getPage } from './store/pageSlice';
import {getPeopleAlsoViewed} from "./store/peopleAlsoViewedSlice";
import PeopleAlsoViewed from '../../../components/PeopleAlsoViewed';
import LinkedPages from "../../../components/LinkedPages/LinkedPages";



const useStyles = makeStyles(theme => ({
  root: {
  },
  header: {
  	marginBottom: 20
  },
  buttonMargin: {
    margin: theme.spacing(1),
  },
  tabRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  tabs: {
    textAlign: 'left'
  },
}));

function PageDetail() {
  const dispatch = useDispatch();
  const page = useSelector(({ pageDetail }) => {
    return pageDetail.page
  });

  const peopleAlsoViewed = useSelector(({ pageDetail }) => {
    return pageDetail.peopleAlsoViewed;
  });


  const routeParams = useParams();

	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);
  const [followers, setFollowers] = useState(null);


  const activities= [
    {
      id: '1',
      user: {
        name: 'Alice Freeman',
        avatar: 'assets/images/avatars/alice.jpg'
      },
      message: 'started following you.',
      time: '13 mins. ago'
    },
    {
      id: '2',
      user: {
        name: 'Andrew Green',
        avatar: 'assets/images/avatars/andrew.jpg'
      },
      message: 'sent you a message.',
      time: 'June 10,2015'
    },
    {
      id: '3',
      user: {
        name: 'Garry Newman',
        avatar: 'assets/images/avatars/garry.jpg'
      },
      message: 'shared a public post with your group.',
      time: 'June 9,2015'
    },
    {
      id: '4',
      user: {
        name: 'Carl Henderson',
        avatar: 'assets/images/avatars/carl.jpg'
      },
      message: 'wants to play Fallout Shelter with you.',
      time: 'June 8,2015'
    },
    {
      id: '5',
      user: {
        name: 'Jane Dean',
        avatar: 'assets/images/avatars/jane.jpg'
      },
      message: 'started following you.',
      time: 'June 7,2015'
    },
    {
      id: '6',
      user: {
        name: 'Juan Carpenter',
        avatar: 'assets/images/avatars/james.jpg'
      },
      message: 'sent you a message.',
      time: 'June 6,2015'
    },
    {
      id: '7',
      user: {
        name: 'Judith Burton',
        avatar: 'assets/images/avatars/joyce.jpg'
      },
      message: 'shared a photo with you.',
      time: 'June 5,2015'
    },
    {
      id: '8',
      user: {
        name: 'Vincent Munoz',
        avatar: 'assets/images/avatars/vincent.jpg'
      },
      message: 'shared a photo with you.',
      time: 'June 4,2015'
    }
  ];

  useDeepCompareEffect(() => {
    dispatch(getPage(routeParams));
    dispatch(getPeopleAlsoViewed(routeParams));
  }, [dispatch, routeParams]);


	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

  if (!page) {
    return <FuseLoading />;
  }

	return (
		<FusePageSimple
      classes={{
        content: 'p-0 sm:px-24'
      }}
			content={
        <div className="w-full">

          <div className="flex flex-col md:flex-row container">
            <div className="flex flex-1 flex-col min-w-0">
              <div className="mb-20 px-10">
                <Card>
                  <CardActions  className="items-right p-0">
                    <div className="w-full flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                      {/*
                      <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Avatar className="w-96 h-96" variant="rounded" src="assets/images/logos/amazon.png" />
                      </FuseAnimate>
                      <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography
                          className="md:mx-24 text-24 md:text-32 my-8 md:my-0"
                          variant="h4"
                          color="inherit"
                        >
                          Amazon
                        </Typography>
                      </FuseAnimate>
                    </div>
                    <div className="flex items-right justify-end">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonMargin}
                        startIcon={<AddIcon />}
                      >
                        Follow
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonMargin}
                        endIcon={<TrendingFlatIcon />}
                      >
                        Visit Website
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonMargin}
                      >
                        ...
                      </Button>
                      */}

                      <PageHeader page={page} />
                    </div>
                  </CardActions>
                </Card>
              </div>


              <div className={classes.root}>
                <div className="w-full px-10">

                  <Tabs
                    className={classes.tabs}
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="off"
                    classes={{
                      root: 'h-64 w-full'
                    }}
                    align="left"
                  >
                    <Tab label="Home" />
                    <Tab label="About"/>
                    <Tab label="Links"/>
                  </Tabs>


                </div>

              </div>

              <div className="flex flex-col sm:flex sm:flex-row py-10">

                <div className="widget flex w-full sm:w-1/4 px-10">

                  <div className="w-full pb-32">
                    <Followers id={routeParams.id} type={page.partyType}/>
                  </div>
                </div>

                <div className="widget w-full sm:w-3/4 sm:p-0 md:px-10 px-10">
                  {selectedTab === 0 && <TimelineTab />}
                  {selectedTab === 1 && <AboutTab page={page} />}
                  {selectedTab === 2 && <ReviewsTab />}
                </div>
              </div>



            </div>

            <div className="flex flex-col md:w-320 px-10">
              <div className="widget w-full pb-32">
                <Ad/>
              </div>


              <div className="widget w-full pb-32">
                <PeopleAlsoViewed items={peopleAlsoViewed}/>
              </div>

              <div className="widget w-full pb-32">
                <PopularGroup/>
              </div>


            </div>


          </div>

				</div>
			}
		/>
	);
}

export default withReducer('pageDetail', reducer)(PageDetail);
