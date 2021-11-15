import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';


const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  '& .todo-title, & .todo-notes': {
    textDecoration: 'line-through',
  },

}));

function ExperienceListItem(props) {
  const dispatch = useDispatch();

  return (
    <StyledListItem
      className="py-20 px-0 sm:px-8"
      dense
      button
    >
      <div className="flex flex-col sm:flex-row items-center justify-start">
        <div className="px-8 order-first sm:order-none">
          {props.experience.employer.avatar ? (
            <Avatar variant="square" alt={props.experience.employer.name} src={props.experience.employer.avatar} className="w-60 h-60 rounded-6"/>
          ) : (
            <Avatar
              variant="square"
              sx={{
                backgroundColor: (theme) => theme.palette.primary[500],
              }}
              className="w-60 h-60 rounded-6"
            >
              {props.experience.employer.name[0]}
            </Avatar>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography className="font-medium">{props.experience.employmentTitle}</Typography>

        <div className="flex flex-col py-4">
          <Typography className="truncate text-14 pb-2">{props.experience.employer.name}</Typography>
          <Typography color="textSecondary" className="truncate">
            {format(new Date(props.experience.fromDate), 'PP')} - {format(new Date(props.experience.thruDate), 'PP')}
          </Typography>
        </div>

        <div className="flex -mx-2">
          <Typography color="textSecondary" className="truncate">
            {props.experience.description}
          </Typography>
        </div>
      </div>


    </StyledListItem>
  );
}

export default ExperienceListItem;
