import React, { useEffect, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import '@aws-amplify/ui-react/styles.css';
import { makeStyles } from '@mui/styles';
import styles from './Asignaturas.style';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from "axios";

import { Card, Typography } from '@mui/material';

const useStyles = makeStyles(styles);

export default function Asignaturas() {
  const [asig, setAsig] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(`https://eygko4qm4d.execute-api.eu-west-3.amazonaws.com/dev/asignaturas`);
      setAsig(res.data);
    };
    fetchData();
  }, []);

  return (
    
      <Grid container display='flex' justifyContent='center' columnSpacing={2} className={classes.root}>
        <Grid xs={6}>
          <Card>
            <Typography variant='h5' sx={{ paddingLeft: 2 }}>Asignaturas</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Nombre</TableCell>
                    <TableCell align="right" className={classes.tableCell}>Aula</TableCell>
                    <TableCell align="right" className={classes.tableCell}>Profesor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {asig.map((row) => (
                    <TableRow
                      key={row.Asignatura}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Asignatura}
                      </TableCell>
                      <TableCell align="right">{row.Aula}</TableCell>
                      <TableCell align="right">{row.Profesor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>  
    
  )
}