import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { Box } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  ...(active && {
    backgroundColor: theme.palette.background.paper,
  }),
}));

function ActivityListItem(props) {
  return (
    <StyledListItem
      button
      className="px-16 py-12 min-h-92"
    >
      <div className="relative">
        <Avatar src={props.note.createdBy.avatar} alt={props.note.createdBy.firstName}>
          {!props.note.createdBy.avatar || props.note.createdBy.avatar === '' ? props.note.createdBy.firstName[0] : ''}
        </Avatar>
      </div>

      <ListItemText
        classes={{
          root: 'min-w-px px-16',
          primary: 'font-medium text-14',
          secondary: 'truncate',
        }}
        primary={props.note.createdBy.firstName + ' ' + props.note.createdBy.lastName}
        secondary={props.note.message}
      />

      {props.note.createdDate && (
        <div className="flex flex-col justify-center items-end">
          {props.note.createdDate && (
            <Typography
              className="whitespace-nowrap mb-8 font-medium text-12"
              color="textSecondary"
            >
              {format(new Date(props.note.createdDate), 'PP')}
            </Typography>
          )}
          {props.note.unread && (
            <Box
              sx={{
                backgroundColor: 'secondary.main',
                color: 'secondary.contrastText',
              }}
              className="flex items-center justify-center min-w-24 h-24 rounded-full font-medium text-12 text-center"
            >
              {props.note.unread}
            </Box>
          )}
        </div>
      )}
    </StyledListItem>
  );
}

export default ActivityListItem;
