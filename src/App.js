import React, { useState } from 'react';
import Boton from './Components/Boton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <Container className="col-6 text-center my-3">
      <h1>Desafío Estado de los Componentes y eventos.</h1>
      <Form>
        <Form.Group className="mb-3 text-start pt-5">
          <Form.Label>Nombre</Form.Label>
          <Form.Control className='text' value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-5 text-start" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {username !== '' && password !== '' && <Boton className="mt-3" text="Iniciar sesión" onSubmit={() => {
            if (username === 'ADL' && password === '252525') {
              alert('La sesión fue iniciada correctamente');
            } else {
              alert('Error: nombre de usuario o contraseña incorrectos');
            }
          }} />}
        </Form.Group>

      </Form>
    </Container>
  );
};

export default App;