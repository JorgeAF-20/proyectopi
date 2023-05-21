import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CardAction from '../../components/CardAction/CardAction';
import Directory from '../../components/Directory/Directory';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Students.style';
import { Routes, Route } from 'react-router-dom';


const useStyles = makeStyles(styles);

function Almacenamiento({accessLevel="public", onUploadSuccess}) {
  return (
    <StorageManager 
      onUploadSuccess={onUploadSuccess}
      acceptedFileTypes={['image/*']}
      accessLevel={accessLevel}
      maxFileCount={1}
      isResumable
    />
  );
}

export default function Students() {
  const [newRender, setNewRender] = useState(true);
  const classes = useStyles();

  const handlenewRender = () => {
    setNewRender(!newRender)
  }

  return (
    <>
      <Grid container display='flex' justifyContent='center' columnSpacing={6} rowSpacing={8}  className={classes.root}>       
        <CardAction image="/images/almacenamiento.jpg" alt="almacenamiento" title="Almacenamiento" text="Sube los archivos correspondientes para el profesorado." url="/alumnos/almacenamiento" ancho={4} />
      </Grid>
      <Grid mt={2}>
        <Routes>
          <Route exact path='/' />
          <Route exact path='/almacenamiento' element={
            <>
              <Almacenamiento accessLevel="private" onUploadSuccess={handlenewRender}/>
              <Directory level="public" newRender={newRender}/>
              <Directory level="private" newRender={newRender}/>
            </>
          } />
        </Routes>
      </Grid>
    </>  
  )
}

