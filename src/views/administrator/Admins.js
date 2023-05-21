import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CardAction from '../../components/CardAction/CardAction';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import Directory from '../../components/Directory/Directory';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Admins.style';
import { Routes, Route } from 'react-router-dom';
import Users from '../../components/Users/Users';
import Asignaturas from '../../components/Asignaturas/Asignaturas';

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

export default function Admins() {
  const [newRender, setNewRender] = useState(true);
  const classes = useStyles();

  const handlenewRender = () => {
    setNewRender(!newRender)
  }

  return (
    <>
      <Grid container align="center" columnSpacing={6} rowSpacing={8}  className={classes.root}>
        <CardAction image="/images/alumno.jpg" alt="alumnos" title="Users" text="Usuarios de la academia" url="/administradores/users" ancho={4} /> 
        <CardAction image="/images/asignaturas.jpg" alt="asignaturas" title="Asignaturas" text="Asignaturas de la academia" url="/administradores/asignaturas" ancho={4} />       
        <CardAction image="/images/almacenamiento.jpg" alt="almacenamiento" title="Almacenamiento" text="Sube los archivos para el profesorado." url="/administradores/almacenamiento" ancho={4} />
      </Grid>
      <Grid mt={2}>
        <Routes>
          <Route exact path='/' />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/asignaturas' element={<Asignaturas/>} />
          <Route exact path='/almacenamiento' element={
            <>
              <Almacenamiento onUploadSuccess={handlenewRender}/>
              <Directory newRender={newRender}/>
            </>
          } />
        </Routes>
      </Grid>
    </>  
  )
}