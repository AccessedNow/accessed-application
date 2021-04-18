import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Chip, Divider, Box, Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { openCardDialog } from '../store/cardSlice';
import Rating from '@material-ui/lab/Rating';
import { setSelectedItem } from '../store/candidatesSlice';

const useStyles = makeStyles(theme => ({
	card: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	}
	,
	tag:
	{
		background: "#0ea715",
		color: 'white',
		borderRadius: 5
	},
	greenText:
	{
		color: "#0ea715"
	},
}));

function BoardCard(props) {
	const dispatch = useDispatch();


	const classes = useStyles(props);
	const { cardId, index, card } = props;
	let visibleColumns = useSelector(({ jobApp }) => jobApp.jobs.visibleCandidatesColumns);

	// const checkItemsChecked = getCheckItemsChecked(card);
	// const checkItems = getCheckItems(card);
	// const commentsCount = getCommentsCount(card);

	const BorderLinearProgress = withStyles(theme => ({
		root: {
			height: 10,
			borderRadius: 5
		},
		colorPrimary: {
			backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
		},
		bar: {
			borderRadius: 5,
			backgroundColor: '#faeaa8'
		}
	}))(LinearProgress);
	function handleCardClick(ev, _card) {
		ev.preventDefault();
		dispatch(openCardDialog(_card));
	}



	return (
		<Draggable draggableId={cardId} index={index} type="card">
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

					<Card
						className={clsx(classes.card, 'w-full mb-16 rounded-4 cursor-pointer border-1')}
						elevation={snapshot.isDragging ? 3 : 0}
						onClick={ev => { dispatch(setSelectedItem(card.id)); handleCardClick(ev, card) }}
					>
						<CardHeader
							avatar={<span className="flex flex-col">
								<div className={`-mt-24 p-8  pb-0 ` + classes.tag}>New</div>
								<Avatar aria-label="Recipe" src={card.applicant.avatar} className="mt-10" />
							</span>}

							title={
								<span className="flex">

									<Typography className="font-medium mt-16" color="primary" paragraph={false}>
										{card.applicant.firstName} {card.applicant.lastName}
									</Typography>
								</span>
							}
							subheader={card.applicant.position}
						/>
						<CardContent className="flex flex-col flex-auto p-0">
							{
								visibleColumns.find(m => m.name === "Evaluation" && m.checked === true) && <div className="ml-68" >
									<Rating
										name="simple-controlled"
										value={card.rating}
									/>
								</div>
							}


							<Divider className="h-2 w-full" />

						</CardContent>
						<CardActions>
							<div className="flex flex-wrap mb-6 mx-16 mt-6 justify-between w-full">
								<div className="flex align-center">
									<Icon>insert_comment</Icon>
									<span className="ml-5">6</span>
								</div>
								{
									visibleColumns.find(m => m.name === "Tasks" && m.checked === true) &&

									<div className="flex align-center">
										<Icon>done</Icon>
										<span className="ml-5">2</span>
									</div>
								}
								<div className={`flex align-center ` + classes.greenText}>
									<Icon>history</Icon>
									<span className="ml-5">8d</span>
								</div>

							</div>
						</CardActions>

					</Card>

				</div>
			)}
		</Draggable>
	);
}

export default BoardCard;
