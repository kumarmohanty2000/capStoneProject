import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header({brand, section2,section3, section4, section5}) {
    return (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" >
          <Container fluid style={{marginLeft:"70px", marginRight:"70px"}}>
            <Navbar.Brand href="#home">{brand}</Navbar.Brand>
            <Nav className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#about">{section2}</Nav.Link>
                <Nav.Link href="#products">{section3}</Nav.Link>
                <Nav.Link href="#blogs">{section4}</Nav.Link>
                <Nav.Link href="#contact">{section5}</Nav.Link>
            </Navbar.Collapse>
            </Nav>
          </Container>
        </Navbar>
      );
}
