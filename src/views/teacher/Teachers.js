import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CardAction from '../../components/CardAction/CardAction';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Teachers.style';

const useStyles = makeStyles(styles);

export default function Teachers() {
  const classes = useStyles();

  return (
    <>
      <Grid container align="center" columnSpacing={5} rowSpacing={2} className={classes.root}>
        <CardAction image="/images/alumnos.jpg" alt="alumnos" title="Alumnos" text="Alumnos a los que les impartes clases." url="/Profesor/alumnos" ancho={4} />
        <CardAction image="/images/asignaturas.jpg" alt="asignaturas" title="Asignaturas" text="Echale un vistazo a las asignaturas que impartes" url="/Profesor/asignaturas" ancho={4} />        
        <CardAction image="/images/almacenamiento.jpg" alt="almacenamiento" title="Almacenamiento" text="Sube tus archivos para el alumnado." url="/Profesor/almacenamiento" ancho={4} />
      </Grid>
    </>  
  )
}
