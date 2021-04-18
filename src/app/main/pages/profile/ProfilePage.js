import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import AppBar from '@material-ui/core/AppBar';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import AboutTab from './tabs/AboutTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import TimelineTab from './tabs/TimelineTab';
import Toolbar from '@material-ui/core/Toolbar';

import {useDispatch, useSelector} from "react-redux";
import React, { useEffect, useState } from 'react';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import {getProfile} from "./store/userSlice";
import {getRelationship} from "./store/relationshipSlice";
import {getPeopleAlsoViewed} from "./store/peopleAlsoViewedSlice";
import {getUserExperiences} from "./store/experiencesSlice";
import {getUserEducations} from "./store/educationsSlice";

import reducer from "./store";
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import Ad from '../../../components/Ad/Ad';
import ProfileHeader from './ProfileHeader';
import PopularGroup from './Widgets/PopularGroup';
import Experiences from './Widgets/Experiences';
import Educations from './Widgets/Educations';
import Activities from './Widgets/Activities';
import Recommendations from './Widgets/Recommendations';



import Interests from './Widgets/Interests';

import PeopleAlsoViewed from '../../../components/PeopleAlsoViewed';
import PeopleYouMayKnow from "../../../components/PeopleYouMayKnow/PeopleYouMayKnow";

const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 320,
		minHeight: 320,
		[theme.breakpoints.down('md')]: {
			height: 240,
			minHeight: 240
		}
	}
}));



function ProfilePage() {
  const routeParams = useParams();
  const dispatch = useDispatch();
	const classes = useStyles();

	const [selectedTab, setSelectedTab] = useState(0);



  const profile = useSelector(({ profilePage }) => {
    return profilePage.user
  });

  const peopleAlsoViewed = useSelector(({ profilePage }) => {
    return profilePage.peopleAlsoViewed;
  });

  const experiences = useSelector(({ profilePage }) => {
    return profilePage.experiences;
  });

  const educations = useSelector(({ profilePage }) => {
    return profilePage.educations;
  });

  const relationship = useSelector(({ profilePage }) => {
    return profilePage.relationship;
  });



  useDeepCompareEffect(() => {
    dispatch(getProfile(routeParams));
    dispatch(getRelationship(routeParams));
    dispatch(getPeopleAlsoViewed(routeParams));
    dispatch(getUserExperiences(routeParams));
    dispatch(getUserEducations(routeParams));
  }, [dispatch, routeParams]);

  function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	console.log('relationship', relationship)
	if(!profile){
  	return <FuseLoading />
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

                      <ProfileHeader profile={profile} />
                    </div>
                  </CardActions>
                </Card>
              </div>


              <div className={classes.root}>
                <div className="w-full px-10">


                </div>

              </div>

              <div className="w-full py-10">

                {profile.about && (
                <Card className="w-full mb-16 rounded-8">
                  <AppBar position="static" elevation={0} className="bg-transparent">
                    <Toolbar className="px-8">
                      <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                        About
                      </Typography>
                    </Toolbar>
                  </AppBar>

                  <CardContent className="pt-0">
                    {profile.about}
                  </CardContent>
                </Card>
                )}

                {relationship && (
                <Card className="w-full mb-16 rounded-8">
                  <AppBar position="static" elevation={0} className="bg-transparent">
                    <Toolbar className="px-8">
                      <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                        Activity
                      </Typography>
                    </Toolbar>
                  </AppBar>

                  <CardContent>
                    <Activities activities={relationship.activities} />
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      See more
                    </Button>
                  </CardActions>
                </Card>
                )}

                <Card className="w-full mb-16 rounded-8">
                  <AppBar position="static" elevation={0} className="bg-transparent">
                    <Toolbar className="px-8">
                      <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                        Experiences
                      </Typography>
                    </Toolbar>
                  </AppBar>

                  <CardContent>
                    <Experiences experiences={experiences}/>
                    <Divider className="mb-20 "/>
                    <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                      Educations
                    </Typography>
                    <Educations educations={educations}/>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      See more
                    </Button>
                  </CardActions>
                </Card>

                {relationship && relationship.interests && (
                <Card className="w-full mb-16 rounded-8">
                  <AppBar position="static" elevation={0} className="bg-transparent">
                    <Toolbar className="px-8">
                      <Typography variant="subtitle1" color="primary" className="flex-1 px-12">
                        Interests
                      </Typography>
                    </Toolbar>
                  </AppBar>

                  <CardContent>
                    <Interests interests={relationship.interests}/>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      See more
                    </Button>
                  </CardActions>
                </Card>
                )}

                {relationship && (relationship.recommendations || relationship.reviews || relationship.givens) && (
                  <Recommendations recommendations={relationship.recommendations} reviews={relationship.reviews} given={relationship.givens}/>
                )}


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
                <PeopleYouMayKnow id={routeParams.id}/>
              </div>




            </div>


          </div>

        </div>
      }
    />
	);
}

export default withReducer('profilePage', reducer)(ProfilePage);
