import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='mb-5 pe-3 ps-3'>
        <Navbar.Brand href="/">Home 🏚️</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/contacto">Contacto 📧</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">
              Mundo del Tenis 🎾
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;