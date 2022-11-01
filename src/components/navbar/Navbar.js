import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/blueprint-logo.png'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

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
            <Link className='nav-pages'  href="#action2">Blog</Link>
            <hr />
            <Link className='nav-pages' href="#action2">Our Culture</Link>
            <hr />

            <motion.button
            whileHover={{scale: 1.07, originX: 0}}
            transition={{type: 'tween', stiffness: 300}}

            className='li-btn'
            >
              Get to know more
            </motion.button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;