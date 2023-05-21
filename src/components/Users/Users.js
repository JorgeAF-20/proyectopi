import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import styles from './Users.style';
import { Card, Typography } from '@mui/material';
import { Auth } from 'aws-amplify';

const useStyles = makeStyles(styles);

async function signUp( username, password, email, groupname) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default function Users() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [typeUser, setTypeUser] = useState('profesor')
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Card>
      <Grid container columnSpacing={2} rowSpacing={1} p={2} className={classes.root}>
        <Grid container xs={12}>
          <Grid xs={2}>
            <Button variant="contained" size="large" endIcon={<GroupAddIcon />}   onClick={(event) => signUp(nombre, password, email, typeUser)}>
              Sign up
            </Button>
          </Grid>
          {/* <Grid xs={2}>
            <TextField
              id="tipoUsuario"
              select
              fullWidth
              value={typeUser}
              onChange={(event) => setTypeUser(event.target.value)}
              SelectProps={{native: true}}
              variant="standard"
              >
              <option key='profesor' value='profesor'>
                Profesor
              </option>
              <option key='alumno' value='alumno'>
                Alumno
              </option>
            </TextField>
          </Grid> */}
        </Grid>
        <Grid container xs={12}>
          <Grid xs={4}>
            <TextField
              required
              fullWidth
              value={nombre}
              id='Nombre'
              label='Nombre'
              variant='standard'
              onChange={(event) => setNombre(event.target.value)}
            />
          </Grid>
          <Grid xs={5}>
            <TextField
              required
              fullWidth
              value={email}
              id='Email'
              label='Email'
              variant='standard'
              type='email'
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid xs={3}>
            <FormControl variant="standard">
              <InputLabel htmlFor="Password">Password</InputLabel>
              <Input
                value={password}
                id="Password"
                type={showPassword ? 'text' : 'password'}
                onChange={(event) => setPassword(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
