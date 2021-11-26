import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { openCardDialog } from '../../store/cardSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  transitionProperty: 'box-shadow',
  transitionDuration: theme.transitions.duration.short,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
}));

function BoardCard(props) {
  const dispatch = useDispatch();
  const board = useSelector(({ jobDetail }) => jobDetail.board);

  const { cardId, index } = props;
  const card = _.find(board.cards, { id: cardId });
  const checkItemsChecked = getCheckItemsChecked(card);
  const checkItems = getCheckItems(card);
  const commentsCount = getCommentsCount(card);

  const member = card.idMembers.length?_.find(board.members, {id: card.idMembers[0] }):null;
  function handleCardClick(ev, _card) {
    ev.preventDefault();
    dispatch(openCardDialog(_card));
  }

  function getCheckItemsChecked(_card) {
    return _.sum(
      _card.checklists.map((list) => _.sum(list.checkItems.map((x) => (x.checked ? 1 : 0))))
    );
  }

  function getCheckItems(_card) {
    return _.sum(_card.checklists.map((x) => x.checkItems.length));
  }

  function getCommentsCount(_card) {
    return _.sum(_card.activities.map((x) => (x.type === 'comment' ? 1 : 0)));
  }

  return (
    <Draggable draggableId={cardId} index={index} type="card">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <StyledCard
            className={clsx(
              snapshot.isDragging ? 'shadow-lg' : 'shadow-0',
              'w-full mb-16 rounded6 cursor-pointer border-1'
            )}
            onClick={(ev) => handleCardClick(ev, card)}
          >

            <div className="p-16 pb-0">
              {card.idLabels.length > 0 && (
                <div className="flex flex-wrap mb-8 -mx-4">
                  {card.idLabels.map((id) => {
                    const label = _.find(board.labels, { id });
                    return (
                      <Tooltip title={label.name} key={id}>
                        <div className={clsx(label.class, 'w-32  h-6 rounded-6 mx-4 mb-6')} />
                      </Tooltip>
                    );
                  })}
                </div>
              )}

              {member &&
              <div className="flex flex-row items-start justify-start">
                <Avatar
                  sx={{
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: 'white',
                  }}
                  className="w-40 h-40 md:w-40 md:h-40"
                  src={member.avatar}
                />
                <div className="flex flex-col flex-1 items-start justify-start ml-5 p-8">
                  <Typography variant="h6" color="inherit" className="pt-8 font-600">
                    {member.name}
                  </Typography>
                  <Typography variant="body" color="inherit" className="pt-8">
                    Developer
                  </Typography>
                </div>
              </div>
              }


            </div>

            <div className="flex justify-between h-48 px-16 border-t-1">
              <div className="flex items-center -mx-6">
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
              </div>

              <div className="flex items-center justify-end -mx-6">
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
          </StyledCard>
        </div>
      )}
    </Draggable>
  );
}

export default BoardCard;
