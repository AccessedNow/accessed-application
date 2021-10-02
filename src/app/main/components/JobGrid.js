import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JobCardItem from './JobCardItem';

function JobList(props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {props.jobs.map((job) => (
          <Grid item xs={4} md={4}>
            <JobCardItem job={job}/>
          </Grid>

        ))}
      </Grid>
    </Box>
  );
}

export default JobList;
