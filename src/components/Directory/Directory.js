import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Directory.style';

import { Storage } from 'aws-amplify';
import { Card, Typography } from '@mui/material';

const useStyles = makeStyles(styles);

export default function Directory( {level="public", newRender} ) {
  const [files, setFiles] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const loadList = async () => {
      let tempFiles = [];
      try {
        const key = await Storage.list('', { level: level, pageSize : 'ALL', cacheControl: 'no-cache' }) 
        key.results.map(async item => {
          const result = await Storage.get(item.key, {level: level})
          tempFiles.push({signedURL: result, name: item.key});
          setFiles(tempFiles)
        })

      }
      catch (err) {
        console.log(err)
      }
    }

    loadList();
  },[newRender, level]);

  return (
    <Grid mt={2}>
      <Card>
        <Grid container columnSpacing={2} className={classes.root}>
          <Grid xs={12}><Typography variant='h5' sx={{ paddingLeft: 2 }}>{level}</Typography></Grid>
          {files.map(item => {
            return (
              < Grid xs={4} pl={3} pb={1} key={item.name}>
                <a href={item.signedURL} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </Grid> 
            )
          })}
        </Grid>  
      </Card>
    </Grid>
  )
}