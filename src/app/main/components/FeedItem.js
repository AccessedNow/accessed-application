import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';
import format from 'date-fns/format';
import { styled } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';


const Article = styled(Card)(({ theme }) => ({
  borderWidth: 1,
  borderColor: '#eee',
  boxShadow: 'none',
  borderRadius: 0,
  [theme.breakpoints.up('md')]: {
    borderRadius: 4,
  },

  '& .job-cover': {
    background: 'url("assets/images/covers/cover11.png")',
    backgroundSize: 'cover!important',
    backgroundPosition: 'center center!important',
  },

  '& .article-resource':{
    borderWidth: 1,
    borderColor: '#eee'
  },
  '& .MuiCardActions-root':{
    borderColor: '#eee',
    borderTopWidth: 1
  },
  '& .comment-form':{
    '& fieldset':{
      borderColor: '#eee',
      borderRadius: 30
    }
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  boxShadow: 'none',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 30,
  color: theme.palette.text.secondary,
}));

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
  const theme = useTheme();
  const dispatch = useDispatch();
  const {post} = props;
  const [showInputComment, setShowInputComment] = useState(false);
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
    // dispatch(addTodo({ id: FuseUtils.generateGUID(), ...data }));
  }

  return (
      <Article
        component={motion.div}
        key={post.id}
        className={clsx('w-full mb-10 md:mb-14 overflow-hidden rounded-0 md:rounded-6 shadow-0',
          post.type
        )}
      >
        <CardHeader
          avatar={
            <div>
              {post.party.partyType === 'PERSON' ?
                <Avatar aria-label="Recipe" src={post.party.avatar}/>
                :
                <Avatar variant="square" aria-label="Recipe" src={post.party.avatar}/>
              }
            </div>
          }
          action={
            <IconButton aria-label="more" size="large">
              <Icon>more_vert</Icon>
            </IconButton>
          }
          title={
            <span className="flex">
                    <Typography fontWeight={600} className="text-12 md:text-14" paragraph={false}>
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
          subheader={
            <Typography component="span" className="text-10 md:text-12" paragraph={false}>
              {format(new Date(post.createdDate), 'PP')}
            </Typography>
          }
        />

        <CardContent className="p-0">
          {post.text && (
            <Typography component="p" className="px-16 mb-16 text-12 md:text-12">
              {post.text}
            </Typography>
          )}

          {post.media && <img src={post.media.preview} alt="post" className="rounded-8" />}

          {post.type==='LINK' && post.resource.type==='IMAGE' &&  (
            <div className="overflow-hidden">
              <img
                className="w-full border-b-1"
                src={post.resource.imageUrl}
                alt="article"
              />
              <div className="p-16 bg-gray-50">
                {/*{post.resource && post.resource.siteName && (*/}
                {/*<Typography variant="subtitle1">{post.resoure.siteName}</Typography>*/}
                {/*)}*/}
                <Typography variant="h6" fontWeight={600} color={theme.palette.text.secondary} className="text-12">{post.resource.siteName.toUpperCase()}</Typography>
                <Typography variant="h6" fontWeight={600} className="text-14 truncate">{post.resource.title}</Typography>
                {/*<Typography variant="subtitle2" className="text-11 truncate">{post.resource.caption}</Typography>*/}

              </div>
            </div>
          )}

          {post.type==='JOB' && post.resource &&  (
            <div className="overflow-hidden">
              <div className="job-cover h-128 border-b-1">
                {/*<img*/}
                  {/*className="w-full h-full"*/}
                  {/*src="assets/images/covers/cover1.png"*/}
                  {/*alt="article"*/}
                {/*/>*/}
              </div>
              <div className="flex flex-row justify-between p-16 bg-gray-50 relative">
                {/*{post.resource && post.resource.siteName && (*/}
                {/*<Typography variant="subtitle1">{post.resoure.siteName}</Typography>*/}
                {/*)}*/}

                <div className="flex flex-row">
                  <Avatar variant="square" className="w-52 h-52 rounded-4" src={post.resource.company.avatar}/>
                  <div className="px-8">
                    <Typography variant="h6" fontWeight={600} color={theme.palette.text.secondary} className="text-12">{post.resource.company.name.toUpperCase()}</Typography>
                    <Typography variant="h6" fontWeight={600} className="text-14 truncate">{post.resource.title}</Typography>
                  </div>
                  {/*<Typography variant="subtitle2" className="text-11 truncate">{post.resource.caption}</Typography>*/}
                </div>
                <Button to={`jobs/view/${post.resource.jobId}`} variant="contained" color="primary" size="small" className="rounded-4 py-0">
                  Apply
                </Button>
              </div>
            </div>
          )}

          {post.type==='SURVEY' && post.resource &&  (
            <div className="article-resource mx-16 rounded-6 overflow-hidden">
              <div className="p-16">
                <Typography variant="h6" fontWeight={600} className="text-12 md:text-14">
                  {post.resource.text}
                </Typography>
                <Typography variant={'subtitle2'} color={'text.secondary'} className="text-10">
                  The author can see how you vote.
                  <Link color="primary" href={'/terms-conditions'} underline={'none'}>
                    Learn more.
                  </Link>
                </Typography>
                <div className="mt-14">
                  <Stack spacing={1} className="mb-8">
                    {post.resource.items.map((item) => (
                      <Item>
                        <Button fullWidth size="small" className="py-0 md:py-5">
                          <span>{item.text}</span>
                          {/*<img height="40" src={item.imageUrl} />*/}
                        </Button>
                      </Item>
                    ))}
                  </Stack>
                  <Typography variant="subtitle2" color={'text.secondary'} className="text-10">
                    {post.resource.noOfVotes?post.resource.noOfVotes + ' votes':'Be the first to vote'} - 1w left
                  </Typography>
                </div>
              </div>
            </div>
          )}
        </CardContent>

        <CardActions disableSpacing className="card-actions flex flex-row justify-between py-4">
          <Button color="inherit" size="small" aria-label="Like" className="text-10 rounded-4" startIcon={<FavoriteIcon />}>
            <Typography className="text-12">Like</Typography>
            <Typography>{post.noOfLikes?post.noOfLikes:''}</Typography>
          </Button>
          <Button color="inherit" size="small" aria-label="Comment" className="text-10 rounded-4" startIcon={<ChatIcon />} onClick={() => setShowInputComment(true)}  >
            <Typography className="text-12">Comment</Typography>
            <Typography color="inherit">{post.noOfComments?post.noOfComments:''}</Typography>
          </Button>
          <Button color="inherit" size="small" aria-label="Share" className="text-10 rounded-4" startIcon={<ShareIcon />}>
            <Typography className="text-12">Share</Typography>
            <Typography>{post.noOfShares?post.noOfShares:''}</Typography>
          </Button>
        </CardActions>


        {showInputComment && (
          <div className="flex flex-auto items-start px-12 -mx-4 comment-form">
            <Avatar className="mx-4" src="assets/images/avatars/profile.jpg" />
            <div className="flex-1 mx-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className="w-full mb-16 rounded-32 shadow-0">
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
                        variant="outlined"
                        size="small"
                        className="rounded-32"
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
        )}
      </Article>
  );
}

export default FeedItem;
