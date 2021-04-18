import FuseAnimate from '@fuse/core/FuseAnimate';
import AddIcon from '@material-ui/icons/Add';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import { userTheme } from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';
import pageService from 'app/services/pageService';
import { updateFollowStatus } from './store/pageSlice';


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


function PageHeader(props)  {
  const {page} = props;
  const classes = useStyles({page});

  if(!page){
    return null;
  }

  function  followPage() {
    pageService.followPage(page.id).then(res => {
      page.hasFollowed=true;
      updateFollowStatus();
    });;

  }

  return (
    <Card className={classes.root + ' w-full'}>
      <CardActionArea>
        <CardMedia
          className={classes.media + " md:h-150"}
          image={buildPartyCoverUrl(page)}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions align="right">
        <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
          <div className="flex flex-1 flex-col w-full items-center md:flex-row md:justify-start">
            <div className="flex w-full items-center">
              <FuseAnimate animation="transition.expandIn" delay={300}>
                {page.avatar ? (
                  <Avatar variant="rounded" className={classes.avatar + " w-96 h-96 mr-12 border"} src={buildPartyAvatarUrl(page)} />
                ) : (
                  <Avatar variant="rounded" className={classes.avatar + " w-96 h-96 mr-12 border"} src="" />
                )}
              </FuseAnimate>
              <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                  <Typography color="inherit" className="text-16 text-24 md:text-32 truncate" align="left">
                    {page.name}
                  </Typography>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                  <Typography variant="caption" align="left">{page.industry?page.industry[0].name+' - ':''}{page.primaryAddress?page.primaryAddress.city + ', ' + page.primaryAddress.country + ' - ':''}{page.noOfFollowers } followers</Typography>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300} align="left">
                  <Typography variant="caption" align="left">{page.headline}</Typography>
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
                disabled={page.hasFollowed}
                startIcon={<AddIcon />}
                onClick={followPage}
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


export default PageHeader;
