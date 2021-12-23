import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import JobCardItem from './JobCardItem';

function JobList(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {props.jobs.map((job) => (
          <Grid key={job._id} item xs={4} md={4}>
            {/*<Link href={`jobs/view/${job.jobId}`}>*/}
              <JobCardItem job={job}/>
            {/*</Link>*/}
            {/*<Paper*/}
              {/*to={`/jobs/view/${job.jobId}`}*/}
              {/*className="flex flex-col items-center justify-center w-full h-full rounded-6 py-24 shadow hover:shadow-lg cursor-pointer"*/}
              {/*role="button"*/}
              {/*component={Link}*/}
            {/*>*/}
              {/*<Icon className="text-56" color="action">*/}
                {/*assessment*/}
              {/*</Icon>*/}
              {/*<Typography className="text-16 font-medium text-center pt-16 px-32" color="inherit">*/}
                {/*{job.title}*/}
              {/*</Typography>*/}
            {/*</Paper>*/}
          </Grid>

        ))}
      </Grid>
    </Box>
  );
}

export default JobList;
