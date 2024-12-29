
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic from './../Pictures/mypic.png';
import './Navbar1.css'

function Navbar1() {
  return (
    <Navbar expand="md" className="bg-primary navs">
      <Container>
        <img src={pic} alt="" className='profile rounded-circle'/>
        <Navbar.Brand href="#" className='fs-1 py-0 px-2 brand text-white'>Praveen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-list">
            <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
            <Nav.Link href="#about" className='nav-item'>About</Nav.Link>
            <Nav.Link href="#skills" className='nav-item'>Skills & Resume</Nav.Link>
            <Nav.Link href="#achievements" className='nav-item'>Achievements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navbar1;
