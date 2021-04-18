import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import feedService from 'app/services/feedService';
import {makeStyles} from "@material-ui/core/styles/index";
import AvatarWrapper from '../../../components/AvatarWrapper';

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
  }
}));

function FeedList(props) {
  const classes = useStyles(props);
  const user = useSelector(({ auth }) => auth.user);
  const [messageText, setMessageText] = useState('');
	const [data, setData] = useState(null);

	useEffect(() => {
	  // if(user.data.id) {
      feedService
        .getLatestFeeds(87, null, 0, 20)
        .then(res => {
          setData(res)
        });

    // }
		// axios.get('/api/profile/timeline').then(res => {
		// 	setData(res.data);
		// });


	}, []);

	/*
  function handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const curPage = data.pageable.pageNumber;
      feedService
        .getLatestFeeds(user.data.id, 0, 10)
        .then(res => {
          setData(res)

        });
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }
*/
  function onInputChange(ev) {
    setMessageText(ev.target.value);
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
					<div>
						<Card className="w-full overflow-hidden rounded-8">
							<Input
								className="p-16 w-full"
								classes={{ root: 'text-14' }}
								placeholder="Write something.."
								margin="none"
								disableUnderline
							/>
							<AppBar
								className="card-footer flex flex-row border-t-1"
								position="static"
								color="default"
								elevation={0}
							>
								<div className="flex-1 items-center">
									<IconButton aria-label="Add photo">
										<Icon>photo</Icon>
									</IconButton>
									<IconButton aria-label="Mention somebody">
										<Icon>person</Icon>
									</IconButton>
									<IconButton aria-label="Add location">
										<Icon>location_on</Icon>
									</IconButton>
								</div>


							</AppBar>
						</Card>

						<Divider className="my-32" />
					</div>

					{data.content.map(post => (
						<Card key={post.id} className="mb-32 overflow-hidden rounded-4">
							<CardHeader
								avatar={<AvatarWrapper party={post.party} />}
								action={
									<IconButton aria-label="more">
										<Icon>more_vert</Icon>
									</IconButton>
								}
								title={
									<span className="flex">
										<Typography className="font-medium" color="primary" paragraph={false}>
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

								{/*post.resource && <img src={post.resource.imageUrl} alt="post" /> */}

								{post.resource && (
									<div className="border-1">
										<img
											className="w-full border-b-1"
											src={post.resource.imageUrl}
											alt="article"
										/>
										<div className="p-16">
											<Typography variant="subtitle1">{post.resource.title}</Typography>
											<Typography variant="caption">{post.resource.caption}</Typography>
											<Typography className="mt-16">{post.resource.excerpt}</Typography>
										</div>
									</div>
								)}
							</CardContent>

							<CardActions disableSpacing className="px-12">
								<Button size="small" aria-label="Add to favorites">
									<Icon className="text-16" color="action">
										favorite
									</Icon>
									<Typography className="normal-case mx-4">Like</Typography>
									<Typography className="normal-case">{post.like}</Typography>
								</Button>
								<Button aria-label="Share">
									<Icon className="text-16" color="action">
										share
									</Icon>
									<Typography className="normal-case mx-4">Share</Typography>
									<Typography className="normal-case">{post.share}</Typography>
								</Button>
							</CardActions>
              <Divider className="my-0" />
							<AppBar
								className="card-footer flex flex-column p-16"
								position="static"
								color="transparent"
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

										<List>
											{post.lastCommentedUsers.map(comment => (
												<div key={comment.id}>
													<ListItem className="px-0 -mx-8">
														<Avatar
															alt={comment.party.name}
															src={comment.party.avatar}
															className="mx-8"
														/>
														<ListItemText
															className="px-4"
															primary={
																<div className="flex">
																	<Typography
																		className="font-medium"
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
														<Button className="normal-case">Reply</Button>
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
                    <form onSubmit={onMessageSubmit} className="px-8">
                      <Paper className="flex items-center relative" elevation={0}>
                        <TextField
                          autoFocus={false}
                          id={"message-input"+post.id}
                          className="flex-1"
                          InputProps={{
                            disableUnderline: true,
                            classes: {
                              root: 'flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8',
                              input: ''
                            },
                            placeholder: 'Type your message'
                          }}
                          InputLabelProps={{
                            shrink: false,
                            className: classes.bootstrapFormLabel
                          }}
                          onChange={onInputChange}
                          value={messageText}
                        />
                        <IconButton className="absolute ltr:right-0 rtl:left-0 top-0" type="submit">
                          <Icon className="text-24" color="action">
                            send
                          </Icon>
                        </IconButton>
                      </Paper>
                    </form>
									</div>
								</div>
							</AppBar>
						</Card>
					))}
				</FuseAnimateGroup>

	);
}

export default FeedList;
