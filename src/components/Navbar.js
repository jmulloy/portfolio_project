import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <Navbar>
             
              <Nav>
              <NavItem eventKey={2}><Link to='/'>Home</Link></NavItem>

                  <NavItem eventKey={2}><Link to='/about'>About</Link></NavItem>
                  
              </Nav>
            
            </Navbar>
        )
    }
}
export { Header }