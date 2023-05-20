import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Directory.style';

import { Storage } from 'aws-amplify';
import { Card, Typography } from '@mui/material';

const useStyles = makeStyles(styles);

function LinkS3 ({data, level}) {
  return (
    <>
      <Grid xs={12}><Typography>{level}</Typography></Grid>
      {data.map(item => {
        return (
          <Grid xs={4}>
            <a href={item.signedURL} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </Grid> 
        )
      })}
    </>
  );
}

export default function Directory( {level="public"} ) {
  const [files, setFiles] = useState([]);
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadList = useCallback(() => {
    Storage.list('', { level: level }) 
    .then(({ results }) =>
      {
        console.log(results);
        const tempFiles = [];
        // eslint-disable-next-line array-callback-return
        results.map(item => {
          Storage.get(item.key, {level: level}).then((signedURL) => tempFiles.push({signedURL: signedURL, name: item.key}));
          // Storage.get(item.key, {level: 'private'}).then((signedURL) => setFiles([...files, {signedURL: signedURL, name: item.key}]));
        })
        console.log(tempFiles)
        setFiles(tempFiles)
      }
    )
    .catch((err) => console.log(err));
  })
  
  useEffect(() => {
    loadList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Card>
      <Grid container columnSpacing={2} className={classes.root}>
        <LinkS3 data={files} level={level}/>     
      </Grid>  
    </Card>
  )
}