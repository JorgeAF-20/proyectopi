import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './CardAction.style';

const useStyles = makeStyles(styles);

function CardAction({image, alt, title, text, url, ancho=4}) {
  const classes = useStyles();
  return (
    <Grid xs={ancho} className={classes.root}>
      <Link to={url}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="250" image={image} alt={alt} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default CardAction;