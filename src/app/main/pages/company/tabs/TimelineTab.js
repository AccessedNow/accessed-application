import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";
import AvatarWrapper from '../../../../components/AvatarWrapper';
import FeedItem from '../../../../components/FeedTimeline/FeedItem';

import feedService from 'app/services/feedService';
import {buildCoverImageUrl, feedImageUrl} from 'app/utils/urlHelper';
import {gridLayout, gridLayoutNoOfCol} from 'app/utils/helper';

import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
  messageRow: {
    '&.contact': {
      '& .bubble': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(theme.palette.background.paper),
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        '& .time': {
          marginLeft: 12
        }
      },
      '&.first-of-group': {
        '& .bubble': {
          borderTopLeftRadius: 20
        }
      },
      '&.last-of-group': {
        '& .bubble': {
          borderBottomLeftRadius: 20
        }
      }
    },
    '&.me': {
      paddingLeft: 40,

      '& .avatar': {
        order: 2,
        margin: '0 0 0 16px'
      },
      '& .bubble': {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        '& .time': {
          justifyContent: 'flex-end',
          right: 0,
          marginRight: 12
        }
      },
      '&.first-of-group': {
        '& .bubble': {
          borderTopRightRadius: 20
        }
      },

      '&.last-of-group': {
        '& .bubble': {
          borderBottomRightRadius: 20
        }
      }
    },
    '&.contact + .me, &.me + .contact': {
      paddingTop: 20,
      marginTop: 20
    },
    '&.first-of-group': {
      '& .bubble': {
        borderTopLeftRadius: 20,
        paddingTop: 13
      }
    },
    '&.last-of-group': {
      '& .bubble': {
        borderBottomLeftRadius: 20,
        paddingBottom: 13,
        '& .time': {
          display: 'flex'
        }
      }
    }
  },
  ellipses: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    boxOrient: 'vertical',
    webkitBoxOrient: 'vertical'
  },
  gridRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 450,
  },


}));


function TimelineTab(props) {
  const party = useSelector(({ companyPage }) => companyPage.company);
  const [data, setData] = useState(null);
  const classes = useStyles(props);
  console.log('company', party)

  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    // if(party) {
    //   axios.get(`http://localhost:90/api/feeds/latest?id=${party.id}&type=${party.partyType}&size=10&page=0`, {headers: {'userId': 87}}).then(res => {
    //   	setData(res.data.data);
    //   });
    //
    // }

    console.log('party', party)
    if(party) {
      feedService
        .getLatestFeeds(party.id, party.partyType, 0, 20)
        .then(res => {
          setData(res)
        });

    }

  }, []);


  function onInputChange(ev) {
    // setMessageText(ev.target.value);
  }

  function onMessageSubmit(ev) {
    ev.preventDefault();
    // if (messageText === '') {
    //   return;
    // }

    // dispatch(
    //   sendMessage({
    //     messageText,
    //     chatId: chat.id,
    //     contactId: selectedContactId
    //   })
    // ).then(() => {
    //   setMessageText('');
    // });
  }



  if (!data) {
    return null;
  }



  return (
    <FuseAnimateGroup
      enter={{
        animation: 'transition.slideUpBigIn'
      }}
    >

      {data.content.map(post => (
        <FeedItem key={post.id} post={post} />
      ))}
    </FuseAnimateGroup>
  );
}

export default TimelineTab;
