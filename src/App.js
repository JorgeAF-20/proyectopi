import { withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Teachers from './views/teacher/Teachers';
import { useEffect } from 'react';
import Students from './views/student/Students';
import Admins from './views/administrator/Admins';


function NotFound() {
  return <>No existe la página</>;
}

function rol( group ) {
  let text = ''
  switch(group) {
    case 'administradores':
      text = 'Administrador: ';
      break;
    case 'profesores':
      text = 'Profesor: ';
      break;
    case 'alumnos':
      text = 'Alumno: ';
      break;
    default:
  }
  return text
}

function App({ signOut, user }) { 
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/' + user.signInUserSession.accessToken.payload['cognito:groups'][0]);
    console.log(user);
  }, [user])

  let group = user.signInUserSession.accessToken.payload['cognito:groups'][0];

  return (
        <Container>
          <Header title="AcademiaJorge" username={user.username} signOut={signOut} url={'/' + group} group={rol(group)} />
          <Routes>
            <Route exact path='/' />
            <Route exact path='/administradores/*' element={<Admins user={user.username} />} />
            <Route exact path='/profesores/*' element={<Teachers user={user.username}/>} />
            <Route exact path='/alumnos/*' element={<Students user={user.username}/>} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </Container>
  );
}
export default withAuthenticator(App);