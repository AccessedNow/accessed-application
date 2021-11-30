import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { dateDifference, dateDiff } from '../../../../../utils/helper';



const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  background: 'white',
  borderRadius: 0,
  marginBottom: 0,
  borderBottom: '1px solid #eee',
  padding: 10,
  '&:hover': {
    borderWidth: '1px',
    borderColor: theme.palette.primary.light
  },
}));

function JobListItem(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const history = useHistory();

  if(!props.job || !props.job.company){
    return null;
  }

  const location = props.job.city? props.job.city + ',' + props.job.country:props.job.state + ',' + props.job.country;
  return  (
    <StyledListItem
      className="py-20 px-0 sm:px-8"
      dense
      button
      disableRipple
      onClick={(event) => {
        // event.stopPropagation();
        // dispatch(props.setSelectedItem(props.job))
        history.push(`jobs/${props.job._id}`);
      }}
    >
      <div className="flex flex-col">
        <Avatar className="mx-4 mb-10 rounded-4" variant="square" sx={{width: 60, height: 60}} alt={props.job.company.name} src={props.job.company.avatar}/>
        {props.job.status === 'DRAFT' &&
        <Chip size="small" label="DRAFT" color="warning" variant="outlined" className="text-10"/>
        }
      </div>
      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <div className="flex flex-row">
          <Typography className="job-title truncate text-14 font-medium pr-20" color={'textPrimary'}>
            {props.job.title}
          </Typography>
        </div>
        <Link href="#" color="secondary" underline="hover" style={{textDecoration: "none"}}>
          <Typography className="" color={'textPrimary'}>
            {props.job.company.name}
          </Typography>
        </Link>
        <div size="small" aria-label={location} className="justify-start">
          <Icon className="text-16" color="action">
            place
          </Icon>
          <Typography className="mx-4">{location}</Typography>
        </div>
        <Typography className="">
          {dateDiff(props.job.createdDate)}
        </Typography>
      </div>


    </StyledListItem>
  );
}

export default JobListItem;
