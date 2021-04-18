import React, { useEffect, useState } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";
import moment from "moment";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAltOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

// import ModeComment from '@material-ui/icons/ModeCommentOutlined';
import InsertComment from '@material-ui/icons/InsertCommentOutlined';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
// import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
// import FbImageLibrary from 'react-fb-image-grid-wo-css';
import FacebookEmoji from 'app/components/FacebookEmoji';
import FbImageLibrary from 'app/components/ImageGrid';
// import FbImageLibrary from 'react-fb-image-grid';
import {feedImageUrl, feedImageUrls} from 'app/utils/urlHelper';
import {gridLayout, gridLayoutNoOfCol, gridLayoutNoOfRow} from 'app/utils/helper';



const useStyles = makeStyles(theme => ({
  card: {
    margin: '0px 0px 20px 0'
    // height: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    borderTop: '1px solid rgba(66, 66, 66, 0.199)',
    maxWidth: '95%',
    padding: '3px 0px',
  },
  avatar: {
    // backgroundColor: red[500],
  },
  lightTooltip: {
    background: theme.palette.common.black,
    color: theme.palette.text.white,
    // boxShadow: theme.shadows[1],
    fontSize: 13,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

function FeedItem(props) {
  const classes = useStyles(props);
  const {post} = props;


  const [reactsDiv, setReactsDiv] = useState([false, false, false, false]);
  const [reactsSize, setReactsSize] = useState('sm');
  const [reactsType, setReactsType] = useState(null);

  function likes(likes) {

    return <Typography variant='caption' className='fblikes' align='left'>
      {likes[0] + ',' + likes[1] + ' and ' + (likes.length - 2) + ' others'}
    </Typography>

  }

  function addLike(like) {

  }

  function showReactsDiv(param, index) {
    const { reactsDiv } = this.state;
    reactsDiv[index] = param;

    this.setState({
      reactsSize: 'sm',
      reactsDiv,
    })
  }


  if(!post){
    return null;
  }

  return (


    <Card className={classes.card}>
      <CardHeader
        className='nomargin'
        avatar={
          <Avatar
            alt=""
            src={post.party.avatar}
            className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography color="primary" align='left' className='fbname'>{post.party.name}</Typography>}
        subheader={<Typography variant='caption' align='left' className='fbdate'>{moment(post.createdDate).fromNow()}</Typography>}
      />

      <CardContent className='nomargin'>

        <Typography className='fbdesc' align='left'>
          {post.text}
        </Typography>
      </CardContent>

      {post.type === 'MEDIA' && <FbImageLibrary post={post} images={feedImageUrls(post.id, post.resource.fileUrls, post.createdDate, 'm')} countFrom={post.resource.fileUrls.length}/>}
      {/*{post.type === 'MEDIA' && post.resource &&*/}
        {/*<div className={classes.root}>*/}
          {/*<GridList cellHeight={200} spacing={1} className={classes.gridList}>*/}
            {/*{post.resource.fileUrls.map((image, idx) => (*/}
              {/*<GridListTile key={image} cols={gridLayout(post.resource.layout, idx+1)} rows={1}>*/}
                {/*<img src={feedImageUrl(post.id, image, post.createdDate, 'm')} alt={image.caption} />*/}
                {/*<GridListTileBar*/}
                  {/*title={gridLayout(post.resource.layout, idx+1)}*/}
                  {/*titlePosition="top"*/}
                  {/*actionIcon={*/}
                    {/*<IconButton aria-label={`star ${''}`} className={classes.icon}>*/}
                      {/*<StarBorderIcon />*/}
                    {/*</IconButton>*/}
                  {/*}*/}
                  {/*actionPosition="left"*/}
                  {/*className={classes.titleBar}*/}
                {/*/>*/}
              {/*</GridListTile>*/}
            {/*))}*/}
          {/*</GridList>*/}
        {/*</div>*/}
      {/*}*/}

      <CardActions disableSpacing className="border-t-2">
        <div className="w-full max-w-320 sm:w-1/3">
          <Button size="small" aria-label="Add to favorites" className="w-full px-12">
            <Icon className="text-16" color="action">
              favorite
            </Icon>
            <Typography className="normal-case mx-4">Like</Typography>
          </Button>
        </div>
        <div className="w-full max-w-320 sm:w-1/3">
          <Button aria-label="Share" className="w-full px-12">
            <Icon className="text-16" color="action">
              chat
            </Icon>
            <Typography className="normal-case mx-4">Comment</Typography>
          </Button>
        </div>
        <div className="w-full max-w-320 sm:w-1/3">
          <Button aria-label="Share" className="w-full px-12">
            <Icon className="text-16" color="action">
              share
            </Icon>
            <Typography className="normal-case mx-4">Share</Typography>
          </Button>
        </div>
      </CardActions>


    </Card>


  );
}

export default FeedItem;
