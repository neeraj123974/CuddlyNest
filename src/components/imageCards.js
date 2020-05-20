import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function HotelImages(props) {
  const classes = useStyles();
  const {src , title , amount} = props
  return (
    <div className="imagesColumn">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <div>{title}</div><div className='paddingLeft'>{amount}</div>
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              <div className='ratingColor'>{'Hotel'}</div>
              <div className='ratingPadding'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

