import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {buildPartyAvatarUrl} from 'app/utils/urlHelper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  cardMedia: {
    maxHeight: 140
  }
}));

export default function Activities(props) {
  const classes = useStyles();

  if(!props.activities){
    return null;
  }


  return (
    <Grid container spacing={3} className={classes.form}>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/material-ui-static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="text-15 font-600">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              129K views
            </Button>
            <Button size="small" color="primary">
              3.4K likes
            </Button>
            <Button size="small" color="primary">
              872 comments
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/material-ui-static/images/cards/paella.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="text-15 font-600">
                Best Paella in town
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              129K views
            </Button>
            <Button size="small" color="primary">
              3.4K likes
            </Button>
            <Button size="small" color="primary">
              872 comments
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/material-ui-static/images/cards/live-from-space.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="text-15 font-600">
                Live from space
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              129K views
            </Button>
            <Button size="small" color="primary">
              3.4K likes
            </Button>
            <Button size="small" color="primary">
              872 comments
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
