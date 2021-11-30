import FuseLoading from '@fuse/core/FuseLoading';
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CandidateTags from '../components/candidate-tags/CandidateTags';
import Match from './Match';


function ContentHeader(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const candidate = useSelector(({ candidateApp }) => candidateApp.candidate);
  const { candidate } = props;

  let location = _.merge({}, candidate.primaryAddress);
  delete location.address1;
  location = _.values(_.omitBy(_.pickBy(location, _.identity), _.isNumber)).join(', ');
  if(!candidate){
    return <FuseLoading/>
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row flex-between">
        <div className="flex items-center justify-center">
          <Button startIcon={<ChevronLeft />} onClick={() => {history.goBack(1)}} className="text-white">
            back
          </Button>
        </div>
        <div className="flex w-full align-center justify-end">
          <IconButton className="sm:hidden">
            <Icon>delete</Icon>
          </IconButton>
          <IconButton>
            <Icon>cloud_download</Icon>
          </IconButton>
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
      </div>
      <div className="w-full py-10 px-20 flex flex-row items-start justify-between">
        <div className="flex flex-row items-start justify-start">
          <Avatar
            sx={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: 'white',
            }}
            className="w-40 h-40 md:w-128 md:h-128"
            src={candidate.avatar}
          />
          <div className="flex flex-col flex-1 items-start justify-start ml-5 p-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              >
                <Typography variant="h6" className="pt-8 font-600">
                  {candidate.firstName.toUpperCase() + ' ' + candidate.lastName.toUpperCase()}
                </Typography>
                <Typography variant="body" className="pt-8">
                  {candidate.jobTitle}
                </Typography>
              </motion.div>
            </div>
            <div className="flex">
              {/*<IconButton size="small" sx={{ p: '0px' }} aria-label="locations">*/}
                {/*<PlaceIcon fontSize="inherit" />*/}
              {/*</IconButton>*/}
              {location}
            </div>
            <div className="flex flex-row items-start justify-start mt-8">
              <div className="flex">
                <IconButton size="small" sx={{ p: '0px' }} aria-label="phone">
                  <CallIcon fontSize="inherit" />
                </IconButton>
                <Typography variant="body" color="inherit" className="">
                  {candidate.phoneNumber}
                </Typography>
              </div>
              <Divider flexItem orientation="vertical" sx={{ mx: 2}} />
              <div className="flex">
                <IconButton size="small" sx={{ p: '0px' }} aria-label="email">
                  <EmailIcon fontSize="inherit" />
                </IconButton>
                <Typography variant="body" color="inherit" className="">
                  {candidate.email}
                </Typography>
              </div>
            </div>
            <CandidateTags tags={candidate.tags} />
          </div>
        </div>
        <div className="flex justify-end">
          <Match series={[87]} />
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
