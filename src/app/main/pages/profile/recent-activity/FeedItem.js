import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';

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
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { add } from './store/activitiesSlice';

const defaultValues = {
  comment: ''
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  comment: yup.string().required(''),
});

function FeedItem(props) {
  const dispatch = useDispatch();
  const {post} = props;

  const { watch, handleSubmit, formState, reset, control, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors, isValid, dirtyFields } = formState;

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(addTodo({ id: FuseUtils.generateGUID(), ...data }));
  }

  return (
      <Card
        component={motion.div}
        key={post.dataResource.id}
        className="w-full mb-32 overflow-hidden rounded-6 shadow"
      >
        <CardHeader
          avatar={<Avatar aria-label="Recipe" src={post.dataResource.party.avatar} />}
          action={
            <IconButton aria-label="more" size="large">
              <Icon>more_vert</Icon>
            </IconButton>
          }
          title={
            <span className="flex">
                    <Typography className="font-normal" color="primary" paragraph={false}>
                      {post.dataResource.party.name}
                    </Typography>
                    <span className="mx-4">
                      {post.dataResource.type === 'post' && 'posted on your timeline'}
                      {post.dataResource.type === 'something' && 'shared something with you'}
                      {post.dataResource.type === 'video' && 'shared a video with you'}
                      {post.dataResource.type === 'article' && 'shared an article with you'}
                    </span>
                  </span>
          }
          subheader={post.dataResource.createdDate}
        />

        <CardContent className="py-0">
          {post.dataResource.text && (
            <Typography component="p" className="mb-16">
              {post.dataResource.text}
            </Typography>
          )}

          {post.dataResource.media && <img src={post.dataResource.media.preview} alt="post" className="rounded-8" />}

          {post.dataResource.resource && post.dataResource.resource.type==='IMAGE' &&  (
            <div className="border-1 rounded-8 overflow-hidden">
              <img
                className="w-full border-b-1"
                src={post.dataResource.resource.imageUrl}
                alt="article"
              />
              <div className="p-16">
                {/*{post.dataResource.resource && post.dataResource.resource.siteName && (*/}
                {/*<Typography variant="subtitle1">{post.dataResource.resoure.siteName}</Typography>*/}
                {/*)}*/}
                <Typography variant="caption">{post.dataResource.resource.title}</Typography>
                <Typography className="mt-16">{post.dataResource.caption}</Typography>
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
            <Typography>({post.like})</Typography>
          </Button>
          <Button aria-label="Share">
            <Icon className="text-16" color="action">
              share
            </Icon>
            <Typography className="mx-4">Share</Typography>
            <Typography>({post.share})</Typography>
          </Button>
        </CardActions>

        <AppBar
          className="card-footer flex flex-column p-16"
          position="static"
          color="inherit"
          elevation={0}
        >
          {post.dataResource.comments && post.dataResource.comments.length > 0 && (
            <div className="">
              <div className="flex items-center">
                <Typography>{post.dataResource.noOfComments} comments</Typography>
                <Icon className="text-16 mx-4" color="action">
                  keyboard_arrow_down
                </Icon>
              </div>

              <List>
                {post.dataResource.comments.map((comment) => (
                  <div key={comment.id}>
                    <ListItem className="px-0 -mx-8">
                      <Avatar
                        alt={comment.user.name}
                        src={comment.user.avatar}
                        className="mx-8"
                      />
                      <ListItemText
                        className="px-4"
                        primary={
                          <div className="flex">
                            <Typography
                              className="font-normal"
                              color="initial"
                              paragraph={false}
                            >
                              {comment.user.name}
                            </Typography>
                            <Typography className="mx-4" variant="caption">
                              {comment.time}
                            </Typography>
                          </div>
                        }
                        secondary={comment.message}
                      />
                    </ListItem>
                    <div className="flex items-center mx-52 mb-8">
                      <Button>Reply</Button>
                      <Icon className="text-14 mx-8 cursor-pointer">flag</Icon>
                    </div>
                  </div>
                ))}
              </List>
            </div>
          )}

          <div className="flex flex-auto -mx-4">
            <Avatar className="mx-4" src="assets/images/avatars/profile.jpg" />
            <div className="flex-1 mx-4">
              <form onSubmit={handleSubmit(onSubmit)}>
              <Paper className="w-full mb-16 shadow-0">
                {/*<Input*/}
                  {/*className="p-8 w-full border-1 rounded-8"*/}
                  {/*classes={{ root: 'text-13' }}*/}
                  {/*placeholder="Add a comment.."*/}
                  {/*multiline*/}
                  {/*margin="none"*/}
                  {/*disableUnderline*/}
                {/*/>*/}
                <Controller
                  name="comment"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Comment"
                      autoFocus
                      variant="outlined"
                    />
                  )}
                />
              </Paper>

              {isValid && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                >
                  Post
                </Button>
              )}
              </form>
            </div>
          </div>
        </AppBar>
      </Card>
  );
}

export default FeedItem;
