import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JobCardItem from './JobCardItem';

function JobList(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {props.jobs.map((job) => (
          <Grid key={job._id} item xs={4} md={4}>
            <Link href={`jobs/view/${job.jobId}`}>
              <JobCardItem job={job}/>
            </Link>
          </Grid>

        ))}
      </Grid>
    </Box>
  );
}

export default JobList;
