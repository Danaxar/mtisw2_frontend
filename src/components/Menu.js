import {Nav, Navbar, Container} from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar'/>
                <Navbar.Collapse id="responsive-navbar">
                    <Nav className='me-auto'>
                        <Nav.Link href="/upload">Ingresar datos</Nav.Link>
                        <Nav.Link href="/planilla">Calcular sueldos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;