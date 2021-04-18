import FuseAnimate from '@fuse/core/FuseAnimate';
import AddIcon from '@material-ui/icons/Add';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import { withStyles, userTheme } from '@material-ui/core/styles';
import {makeStyles, useTheme} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import connect from 'react-redux/es/connect/connect';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import {useSelector} from "react-redux";
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import {saveProduct} from "../../apps/e-commerce/store/productSlice";


/* eslint-disable react/jsx-no-bind */
const styles = theme => ({
	root: props => ({
		backgroundImage: `url("../../assets/images/banners/google_banner.jpg")`,
		color: '#FFFFFF',
		backgroundSize: 'cover',
		backgroundPosition: '0 50%',
		backgroundRepeat: 'no-repeat',
		'&:before': {
			content: "''",
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			zIndex: 1
		}
	})
});

// const useStyles = makeStyles(theme => ({
//   root: props => ({
//     backgroundImage:`url(${props.cover})`,
//     color: '#FFFFFF',
//     backgroundSize: 'cover',
//     backgroundPosition: '0 50%',
//     backgroundRepeat: 'no-repeat',
//     '&:before': {
//       content: "''",
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 0,
//       zIndex: 1
//     }
//   }),
//   media: {
//     height: 250,
//   },
//   avatar: {
//     borderColor: theme.palette.primary.main
//   }
// }));

const useStyles = makeStyles((theme) => ({

  avatar: {
    borderColor: theme.palette.divider
  },
  media: {
    height: 195,
  }
}));


function ProfileHeader(props)  {
  const {profile} = props;
  const classes = useStyles({profile});

  if(!profile){
    return null;
  }

  return (
    <Card className={classes.root + ' w-full'}>
      <CardActionArea>
        <CardMedia
          className={classes.media + " md:h-150"}
          image={buildPartyCoverUrl(profile)}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions align="right">
        <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
          <div className="flex flex-1 flex-col w-full items-center md:flex-row md:justify-start">
            <div className="flex w-full items-center">
              <FuseAnimate animation="transition.expandIn" delay={300}>
                {profile.avatar ? (
                  <Avatar variant="circle" className={classes.avatar + " w-72 h-72 mr-12 border"} src={buildPartyAvatarUrl(profile)} />
                ) : (
                  <Avatar variant="circle" className={classes.avatar + " w-72 h-72 mr-12 border"} src="" />
                )}
              </FuseAnimate>
              <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                  <Typography color="inherit" className="text-16 text-24 md:text-32 truncate" align="left">
                    {profile.name}
                  </Typography>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                  <Typography variant="caption" align="left">{profile.noOfFollowers } followers</Typography>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300} align="left">
                  <Typography variant="caption" align="left">{profile.headline}</Typography>
                </FuseAnimate>
              </div>
            </div>
          </div>
          <FuseAnimate animation="transition.slideRightIn" delay={300}>
            <div className="flex items-center justify-end">
              <Button
                className={" mr-12"}
                variant="contained"
                color="primary"
                disabled={!profile.hasFollowed}
                startIcon={<AddIcon />}
              >
                Follow
              </Button>

              <Button
                className="whitespace-no-wrap normal-case"
                variant="outlined"
                color="primary"
              >
                Visit Website
              </Button>
            </div>
          </FuseAnimate>
        </div>

      </CardActions>
    </Card>
  )}


export default ProfileHeader;
