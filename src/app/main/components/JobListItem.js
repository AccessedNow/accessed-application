import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { dateDifference, dateDiff } from '../../utils/helper';



const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  background: 'white',
  borderRadius: 6,
  marginBottom: 8,
  '&:hover': {
    borderWidth: '1px',
    borderColor: theme.palette.secondary.light
  },
}));

function JobListItem(props) {
  const dispatch = useDispatch();

  if(!props.job || !props.job.company){
    return null;
  }

  const location = props.job.city? props.job.city + ',' + props.job.country:props.job.state + ',' + props.job.country;
  return  (
    <StyledListItem
      className="py-20 px-0 sm:px-8"
      dense
      button
      onClick={(event) => dispatch(props.setSelectedItem(props.job))}
    >
      <Avatar className="mx-4 rounded-4" variant="square" sx={{width: 60, height: 60}} alt={props.job.company.name} src={props.job.company.avatar}/>

      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography
          className="job-title truncate text-14 font-medium"
          color={props.job.hasApplied ? 'textSecondary' : 'inherit'}
        >
          <Link href={`/jobs/view/${props.job.jobId}`} style={{textDecoration: "none"}}>{props.job.title}</Link>
        </Typography>

        <Typography className="">
          <Link href="#" color="secondary" underline="hover" style={{textDecoration: "none"}}>{props.job.company.name}</Link>
        </Typography>
        <Button size="small" aria-label={location} className="justify-start">
          <Icon className="text-16" color="action">
            place
          </Icon>
          <Typography className="mx-4">{location}</Typography>
        </Button>
        <Typography className="">
          {dateDiff(props.job.createdDate)}
        </Typography>
      </div>


    </StyledListItem>
  );
}

export default JobListItem;
