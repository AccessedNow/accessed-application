
import FuseLoading from '@fuse/core/FuseLoading';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getCompanyFeed} from "../store/companySlice";

function TimelineTab() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCompanyFeed(routeParams)).then((res) => {
      setPosts(res.payload);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <FuseLoading />;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="md:flex">
        <div className="flex flex-col flex-1">
          {posts.map((post) => (
            <Card
              component={motion.div}
              variants={item}
              key={post.id}
              className="mb-32 overflow-hidden rounded-16 shadow"
            >
              <CardHeader
                avatar={<Avatar aria-label="Recipe" src={post.party.avatar} />}
                action={
                  <IconButton aria-label="more" size="large">
                    <Icon>more_vert</Icon>
                  </IconButton>
                }
                title={
                  <span className="flex">
                    <Typography className="font-normal" color="primary" paragraph={false}>
                      {post.party.name}
                    </Typography>
                    <span className="mx-4">
                      {post.type === 'post' && 'posted on your timeline'}
                      {post.type === 'something' && 'shared something with you'}
                      {post.type === 'video' && 'shared a video with you'}
                      {post.type === 'article' && 'shared an article with you'}
                    </span>
                  </span>
                }
                subheader={post.createdDate}
              />

              <CardContent className="py-0">
                {post.text && (
                  <Typography component="p" className="mb-16">
                    {post.text}
                  </Typography>
                )}

                {post.media && <img src={post.media.preview} alt="post" className="rounded-8" />}

                {post.article && (
                  <div className="border-1 rounded-8 overflow-hidden">
                    <img
                      className="w-full border-b-1"
                      src={post.article.media.preview}
                      alt="article"
                    />
                    <div className="p-16">
                      <Typography variant="subtitle1">{post.article.title}</Typography>
                      <Typography variant="caption">{post.article.subtitle}</Typography>
                      <Typography className="mt-16">{post.article.excerpt}</Typography>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardActions disableSpacing className="px-12">
                <Button size="small" aria-label="Add to favorites">
                  <Icon className="text-16" color="action">
                    favorite
                  </Icon>
                  <Typography className="mx-4">Like</Typography>
                  <Typography>({post.noOfLikes})</Typography>
                </Button>
                <Button aria-label="Share">
                  <Icon className="text-16" color="action">
                    share
                  </Icon>
                  <Typography className="mx-4">Share</Typography>
                  <Typography>({post.noOfShares})</Typography>
                </Button>
              </CardActions>

              <AppBar
                className="card-footer flex flex-column p-16"
                position="static"
                color="default"
                elevation={0}
              >
                {post.comments && post.comments.length > 0 && (
                  <div className="">
                    <div className="flex items-center">
                      <Typography>{post.comments.length} comments</Typography>
                      <Icon className="text-16 mx-4" color="action">
                        keyboard_arrow_down
                      </Icon>
                    </div>


                  </div>
                )}


              </AppBar>
            </Card>
          ))}
        </div>


      </div>
    </motion.div>
  );
}

export default TimelineTab;
