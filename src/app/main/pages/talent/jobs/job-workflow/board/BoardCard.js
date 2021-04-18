import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { openCardDialog } from '../store/cardSlice';

const useStyles = makeStyles(theme => ({
	card: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	}
}));

function BoardCard(props) {
	const dispatch = useDispatch();
	const board = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.board);

	const classes = useStyles(props);
	const { cardId, index } = props;
	const card = _.find(board.cards, { id: cardId });
	const checkItemsChecked = getCheckItemsChecked(card);
	const checkItems = getCheckItems(card);
	const commentsCount = getCommentsCount(card);

	function handleCardClick(ev, _card) {
		ev.preventDefault();
		dispatch(openCardDialog(_card));
	}

	function getCheckItemsChecked(_card) {
		return _.sum(_card.checklists.map(list => _.sum(list.checkItems.map(x => (x.checked ? 1 : 0)))));
	}

	function getCheckItems(_card) {
		return _.sum(_card.checklists.map(x => x.checkItems.length));
	}

	function getCommentsCount(_card) {
		return _.sum(_card.activities.map(x => (x.type === 'comment' ? 1 : 0)));
	}

	return (
		<Draggable draggableId={cardId} index={index} type="card">
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<Card
						className={clsx(classes.card, 'w-full mb-16 rounded-4 cursor-pointer border-1')}
						elevation={snapshot.isDragging ? 3 : 0}
						onClick={ev => handleCardClick(ev, card)}
					>
            <CardHeader
              avatar={
              	card.user? (
                <Avatar className="h-56 w-56" aria-label="recipe" className={classes.avatar} src={card.user.avatar}></Avatar>
								):(<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>)
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.user.firstName + ' ' + card.user.lastName}
              subheader={card.user.title}
            />

						<div className="p-16 pb-0">

						</div>

						<div className="flex justify-between h-64 px-16 border-t-1">
							<div className="flex items-center -mx-6">
                {card.idMembers.length > 0 && (
                  <div className="flex flex-wrap mb-8 -mx-4">
                    {card.idMembers.map(id => {
                      const member = _.find(board.members, { id });
                      return (
                        <Tooltip title={member.name} key={id}>
                          <Avatar className="mx-4 w-32 h-32" src={member.avatar} />
                        </Tooltip>
                      );
                    })}
                    <div />
                  </div>
                )}

							</div>

							<div className="flex items-center justify-end -mx-6">
                {card.subscribed && (
                  <Icon className="text-18 mx-6" color="action">
                    remove_red_eye
                  </Icon>
                )}

                {card.description !== '' && (
                  <Icon className="text-18 mx-6" color="action">
                    description
                  </Icon>
                )}
								{card.attachments && (
									<span className="flex items-center mx-6">
										<Icon className="text-18" color="action">
											attachment
										</Icon>
										<Typography className="mx-8" color="textSecondary">
											{card.attachments.length}
										</Typography>
									</span>
								)}
								{commentsCount > 0 && (
									<span className="flex items-center mx-6">
										<Icon className="text-18" color="action">
											comment
										</Icon>
										<Typography className="mx-8" color="textSecondary">
											{commentsCount}
										</Typography>
									</span>
								)}
							</div>
						</div>
					</Card>
				</div>
			)}
		</Draggable>
	);
}

export default BoardCard;
