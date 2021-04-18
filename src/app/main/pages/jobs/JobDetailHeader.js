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

const useStyles = makeStyles((theme) => ({

  avatar: {
    borderColor: theme.palette.divider
  },
  media: {
    height: 195,
  }
}));


function JobDetailHeader(props)  {
  const {profile} = props;
  const classes = useStyles({profile});

  if(!profile){
    return null;
  }

  return (
    <Card className={classes.root + ' w-full'} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media + " md:h-100"}
          image={buildPartyCoverUrl(profile)}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions align="right" className="items-center justify-center">
        <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
          <div className="flex flex-1 flex-col w-full items-center md:flex-row md:justify-start">
            <div className="flex w-full items-center justify-center">
              <FuseAnimate animation="transition.expandIn" delay={300}>
                {profile.avatar ? (
                  <Avatar variant="rounded" className={classes.avatar + " w-96 h-96 mr-12 border item-center"} src={buildPartyAvatarUrl(profile)}
                          top={40}
                          left="40%" />
                ) : (
                  <Avatar variant="rounded" className={classes.avatar + " w-72 h-72 mr-12 border"} src="" />
                )}
              </FuseAnimate>
            </div>
          </div>

        </div>

      </CardActions>
    </Card>
  )}


export default JobDetailHeader;
