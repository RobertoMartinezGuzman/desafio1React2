import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
  return (

    <Form className='text-center'>
        <h1 className='texto-contacto'>Cuentanos Amigo Tenista ¿En que te podemos ayudar?</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="roberto@desafiolatam.cl" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <textarea rows="4" type="text" class="form-control" placeholder="Escribenos tus consultas o comentarios..."></textarea>
      </Form.Group>
      <Button variant="success" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contacto;