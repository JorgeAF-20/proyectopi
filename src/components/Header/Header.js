import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import styles from './Header.style';

const useStyles = makeStyles(styles);

function Header({ title, username, url, signOut }) {
  const classes = useStyles();
  
  return (
    <Grid mt={3} mb={2}>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        className={classes.root}
      >
        <Link to={url}>
          <Typography color='primary' variant='h3'>
            {title}
          </Typography>
        </Link>
        <Typography color='primary' variant='h5'>
          {username}
        </Typography>
        <Button onClick={signOut} style={styles.button}>Sign out</Button>  
      </Grid>
      <Divider />
    </Grid>
  );
}

export default Header;
