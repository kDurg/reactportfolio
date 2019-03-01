import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">Kyle Durigan</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>

              <NavItem>
                 <NavLink href="/" active>Home</NavLink>
               </NavItem>
              
               <NavItem>
                <NavLink href="/About">About</NavLink>
               </NavItem>

               <NavItem>
                 <NavLink href="/Portfolio">Portfolio</NavLink>
               </NavItem>

               <NavItem>
                 <NavLink href="/Resume">Resume</NavLink>
               </NavItem>

               <NavItem>
                 <NavLink href="/Blog">Blog</NavLink>
               </NavItem>

               <NavItem>
                 <NavLink href="/Contact">Contact</NavLink>
               </NavItem>     
              <NavItem>
                <NavLink href="https://github.com/kDurg">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

