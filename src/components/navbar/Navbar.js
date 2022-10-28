import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg" style={{boxShadow:'5px -5px 10px #888888'}}>
      <Container bg="white">
        <img src={logo} alt='logo'
         style={{height: '61px', width: '184px'}}
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='navScroll'>
          <Nav
            className=" me-auto mt-5 my-lg-0"
            style={{ maxHeight: '100px', 
            textAlign:'center',
            fontSize: '19px',
            fontWeight: '300',
          }}
            navbarScroll
          >
            <Link style={{textDecoration: 'none', color: 'rgba(102, 102, 102, 0.6)'}} to="/">Home</Link>
            <hr />
            <Link style={{textDecoration: 'none', color: 'rgba(102, 102, 102, 0.6)'}} to="/about">Solutions</Link>
            <hr /> 
            <Link style={{textDecoration: 'none', color: 'rgba(102, 102, 102, 0.6)'}} href="#action2">Blog</Link>
            <hr />
            <Link style={{textDecoration: 'none', color: 'rgba(102, 102, 102, 0.6)'}} href="#action2">Our Culture</Link>
            <hr />
            <motion.button
            whileHover={{scale: 1.07, originX: 0}}
            transition={{type: 'tween', stiffness: 300}}

            style={{border: 'none',
            textAlign: 'center',
            fontSize: '14px' ,
            padding: '10px 20px',
            margin: '0px 0px 10px 0px',
            backgroundColor: '#FDEA6A'
          }}
            >Get to know more</motion.button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;