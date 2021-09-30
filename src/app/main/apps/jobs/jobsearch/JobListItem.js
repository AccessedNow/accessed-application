import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { saveJob, setSelectedItem } from './store/jobsSlice';
import { dateDifference, dateDiff } from '../../../../utils/helper';


import TodoChip from './TodoChip';

const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  ...(completed && {
    background: 'rgba(0,0,0,0.03)',
    '& .job-title, & .job-notes': {
      textDecoration: 'line-through',
    },
  }),
}));

function JobListItem(props) {
  const dispatch = useDispatch();

  return (
    <StyledListItem
      className="py-20 px-0 sm:px-8"
      dense
      button
      onClick={(event) => dispatch(setSelectedItem(props.job._id))}
    >
      <Avatar className="mx-4 rounded-4" variant="square" sx={{ width: 60, height: 60 }} alt={props.job.company.name} src={props.job.company.avatar} />
      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography
          className="job-title truncate text-14 font-medium"
          color={props.job.hasApplied ? 'textSecondary' : 'inherit'}
        >
          <Link href="#" className="color-">{props.job.title}</Link>
        </Typography>

        <Typography className="">
          <Link href="#" color="secondary" underline="hover">{props.job.company.name}</Link>
        </Typography>
        <Typography className="">
          {props.job.country}
        </Typography>
        <Typography className="">
          {dateDiff(props.job.createdDate)}
        </Typography>
      </div>


    </StyledListItem>
  );
}

export default JobListItem;
