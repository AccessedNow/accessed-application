import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaAd() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }} className="rounded-6">
      <CardMedia
        component="img"
        height="140"
        image="/material-ui-static/images/cards/iphone.jpeg"
        alt="Iphone 12"
      />
      <CardContent>
        <Typography gutterBottom variant="body" component="div">
          Iphone 12 Release
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A super-powerful chip. An advanced...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
