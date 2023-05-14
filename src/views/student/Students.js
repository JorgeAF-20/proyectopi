import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CardAction from '../../components/CardAction/CardAction';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Students.style';


const useStyles = makeStyles(styles);

export default function Students() {
  const classes = useStyles();

  return (
    <>
      <Grid container align="center" columnSpacing={6} rowSpacing={8}  className={classes.root}>
        <CardAction image="/images/asignaturas2.jpg" alt="asignaturas" title="Asignaturas" text="Asignaturas a las que estas matriculado." url="/Profesor/asignaturas" ancho={6} />        
        <CardAction image="/images/almacenamiento.jpg" alt="almacenamiento" title="Almacenamiento" text="Sube los archivos correspondientes para el profesorado." url="/Profesor/almacenamiento" ancho={6} />
      </Grid>
    </>  
  )
}

