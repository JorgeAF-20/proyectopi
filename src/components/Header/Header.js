import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import styles from './Header.style';

const useStyles = makeStyles(styles);

function Header({ title, username, url, signOut, group }) {
  const classes = useStyles();
  
  return (
    <Grid mt={2} mb={5}>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        className={classes.root}
      >
        <Link to={url}>
          <Grid container display='flex' alignItems='center'>
            <img
              src='images/graduation_cap_success_celebration_ceremony_master_educational_education_academy_wisdom_uniform_intelligence_knowledge_icon_211076.png'
              alt="AcademiaJorge"
              height='60'
            />
            <Typography color='primary' variant='h2' sx={{ paddingLeft: 1 }}>
              {title}
            </Typography>
          </Grid>
        </Link>
        <Grid container display='flex' alignItems='center'>        
          <Typography color='primary' variant='h5' sx={{ paddingRight: 1 }}>
            {group} {username}
          </Typography>
          <Avatar
            alt={username}
            src={"/images/avatar/" + username + ".jpg"}
            sx={{ width: 60, height: 60 }}
          />
        </Grid>
        <Button onClick={signOut} style={styles.button}>Sign out</Button>  
      </Grid>
      <Divider sx={{ borderColor: '#F4D03F' }}/>
    </Grid>
  );
}

export default Header;
