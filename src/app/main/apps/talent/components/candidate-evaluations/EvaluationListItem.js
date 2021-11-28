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

function EvaluationListItem(props) {
  return (
    <StyledListItem
      button
      className="px-16 py-12 min-h-92"
    >
      <div className="relative">
        <Avatar src={props.evaluation.createdBy.avatar} alt={props.note.createdBy.firstName}>
          {!props.evaluation.createdBy.avatar || props.evaluation.createdBy.avatar === '' ? props.evaluation.createdBy.firstName[0] : ''}
        </Avatar>
      </div>

      <ListItemText
        classes={{
          root: 'min-w-px px-16',
          primary: 'font-medium text-14',
          secondary: 'truncate',
        }}
        primary={props.evaluation.message}
        secondary={format(new Date(props.evaluation.createdDate), 'PP')}
      />

    </StyledListItem>
  );
}

export default EvaluationListItem;
