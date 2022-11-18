import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/blueprint-logo.png'
import {Link} from 'react-router-dom'


function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg" style={{boxShadow:'5px -5px 10px #888888'}}>
      <Container bg="white">
        <Link to="/">
        <img src={logo} alt='logo'
        className='logo'
        />
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='navScroll'>
          <Nav
            className=" nav-ul me-auto mt-5 my-lg-0"
            navbarScroll
          >
            <Link className='nav-pages' to="/">Home</Link>
            <hr />
            <Link className='nav-pages'  to="/about">Solutions</Link>
            <hr /> 
            {/* <Link className='nav-pages'  href="https://blueprintpathway.medium.com/">Blog</Link> */}
            <a className='nav-pages' href="https://blueprintpathway.medium.com/" target='_blank' rel="noreferrer">Blog</a>
            <hr />
            <Link className='nav-pages' to="/culture">Our Culture</Link>
            <hr />

            <button className='li-btn'>
              Get to know more
            </button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;