import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarCustom() {
  return (
    <Navbar className="backgrNav" expand="lg">
      <Container>
        <Navbar.Brand href="/home">CONTACT BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft: '28%', fontSize: "20px"}}>

            <Link to="home"  style={{ color: "black", marginRight: "45px", marginTop: "10px" , textDecoration:"none"}}>Home</Link>
            <Link to="add-user"  style={{ color: "black", marginRight: "45px", marginTop: "10px", textDecoration:"none" }}>Add User</Link>
            <Link to="user-list/:id"  style={{ color: "black", marginRight: "30px", marginTop: "10px", textDecoration:"none" }}>User List</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
