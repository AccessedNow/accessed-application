import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';

import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
  const categories = useSelector(({ jobsLandingPage }) => {
    return jobsLandingPage.jobsLandingSlice?jobsLandingPage.jobsLandingSlice.categories:null;
  });
	const classes = useStyles(props);


	if(!categories){
	  return null;
  }

  return (

    <Grid container spacing={3}>
      {categories.map(category => (
      <Grid item xs={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className="text-center" alignItems="center">
              <img className="w-56 text-center m-auto m-30" src="assets/images/icons/google.png"  alignItems="center" />
              <Typography gutterBottom variant="subtitle1" component="h6" className="font-bold mt-32">
                {category.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="body1" className="text-12 text-green-500">
                1342 Open Positions
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}

export default Categories;
