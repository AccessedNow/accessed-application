import _ from '@lodash';
import format from 'date-fns/format';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInSelectedApplications } from '../../store/applicationsSlice';
import Match from '../../../components/Match';


const ITEM_HEIGHT = 48;

const StyledGridItem = styled(Grid)(({ theme, completed }) => ({
  background: 'white',

}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function ApplicationGridItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const board = useSelector(({ jobDetail }) => jobDetail.job.board);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);
  const selectedApplicationIds = useSelector(({ jobDetail }) => jobDetail.applications.selectedApplicationIds);
  const checked =
    selectedApplicationIds.length > 0 && selectedApplicationIds.find((id) => id === props.application._id) !== undefined;


  const handleOptionClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleOptionClose = () => {
    setAnchorEl(null);
  };
  return (

    <Card
      className="flex flex-col shadow"
      onClick={(ev) => {
            ev.preventDefault();
            // dispatch(openCandidateDialog(props.candidate));
            history.push(`candidates/${props.application.id}`);
          }} >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        className="py-5 px-16"
      />
      <CardContent className="flex flex-col flex-auto items-start justify-start py-0">
        <div className="flex items-center justify-center relative overflow-hidden">
          <Avatar className="w-32 h-32 md:w-64 md:h-64" alt={props.application.user.firstName} src={props.application.user.avatar} />
          <div className="flex flex-1 flex-col relative overflow-hidden px-8">
            <Typography
              className="truncate text-14 font-medium"
              color="inherit"
            >
              {props.application.user.firstName + ' ' + props.application.user.lastName}
            </Typography>

            <Typography className="">
              {props.application.user.jobTitle}
            </Typography>
            <Rating size="small" precision={0.1} name="read-only" value={props.application.user.rating?props.application.user.rating:0} readOnly />
          </div>
        </div>
      </CardContent>
      <CardActions className="justify-start pb-10">
        <div className="flex flex-col items-center">
          <Typography className="">{props.application.user.primaryAddress.city?props.application.user.primaryAddress.city:props.application.user.primaryAddress.state}</Typography>
        </div>
        <Match series={[props.application.user.match]} />
      </CardActions>
      <LinearProgress
        className="w-full"
        variant="determinate"
        value={87}
        color="success"
      />
    </Card>

      // <Checkbox
      //   tabIndex={-1}
      //   disableRipple
      //   checked={checked}
      //   onChange={() => dispatch(toggleInSelectedApplications(props.application._id))}
      //   onClick={(ev) => ev.stopPropagation()}
      // />


  );
}

export default ApplicationGridItem;
