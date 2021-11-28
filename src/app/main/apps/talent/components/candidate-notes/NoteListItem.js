import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';


const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  ...(active && {
    backgroundColor: theme.palette.background.paper,
  }),
}));

function NoteListItem(props) {
  const user = useSelector(({ auth }) => auth.user);

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
        primary={props.note.message}
        secondary={format(new Date(props.note.createdDate), 'PP')}
      />

      {props.note.createdBy.userId===user.data.id && (
        <div className="flex flex-col justify-center items-end">
          {props.note.createdDate && (
            <IconButton fontSize="small" className="text-16">
              <EditIcon fontSize="inherit" />
            </IconButton>
          )}
        </div>
      )}
    </StyledListItem>
  );
}

export default NoteListItem;
