import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
      <>
      <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="py-4 bg">
        <Container>
        <Navbar.Brand  as={Link} to="/home" className="text-warning">DENTTCARE SOLUTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav   className="me-auto ">
            <Nav.Link  as={Link} to="/home" className=' text-light '>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
            <Nav.Link as={Link} to="/home" className="text-light" >Dentist</Nav.Link>
            <Nav.Link as={Link} to="/appointment" className="text-light">Appointment</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-light">Blog</Nav.Link>
            <Nav.Link as={Link} to="/faq" className="text-light">FAQ</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link >
              <h5 className="text-warning me-4">{user?.displayName }</h5>
            </Nav.Link>
            {user?.email?
            
                <button onClick={logOut} className="text-dark btn btn-warning ">Sign Out</button>:
               <Nav.Link as={Link} to="/login"  className=' text-dark btn btn-warning' >Sign In</Nav.Link>
    
          
            
            
              }
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
     
      </>
    );
};

export default Header;