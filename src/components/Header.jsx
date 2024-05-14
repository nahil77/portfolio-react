import { Nav, Navbar } from "react-bootstrap";
import { Link} from "react-router-dom";
import "../components/Header.css"



function Header(){
  
    return(

         <Navbar expand="lg" fixed="top">
        <Navbar.Brand><h1 className="eleven mb-0">PORTFOLIO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="eleven">
          <Nav.Link as={Link} to="/" className="text">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text">About</Nav.Link>
          <Nav.Link as={Link} to="/resume" className="text">RESUME</Nav.Link>
          <Nav.Link as={Link} to="/skills" className="text">SKILLS</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text">CONTACT</Nav.Link>
          <Nav.Link as={Link} to="/contactme" className="text">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
     
    );
}
export default Header;