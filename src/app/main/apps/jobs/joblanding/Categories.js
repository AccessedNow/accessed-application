import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {categoryImageUrl} from 'app/utils/urlHelper';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
});

function Categories(props) {
	const dispatch = useDispatch();
  const categories = useSelector(({ jobLandingPage }) => {
    return jobLandingPage.jobLanding?jobLandingPage.jobLanding.categories:null;
  });
	const classes = useStyles(props);


	if(!categories){
	  return null;
  }

  return (

    <Grid container spacing={2}>
      {categories.map(category => (
      <Grid item xs={3}>
        <Paper elevation={0} className="flex flex-row items-start justify-between rounded-4 p-14 border-1 grey">
          <div className="flex items-center justify-center">
            <IconButton size="small" aria-label="add to favorites" className="flex items-start justify-center">
              <FavoriteIcon fontSize="inherit"/>
            </IconButton>
            <Typography color="inherit" className="text-12 text-gray-900">
              {unescape(category.name)}
            </Typography>
          </div>
          <div className="flex items-end justify-center">
            <Typography color="inherit" className="text-12 text-gray-900">
              532 jobs
            </Typography>
          </div>
        </Paper>
      </Grid>
      ))}
    </Grid>
  );
}

export default Categories;
