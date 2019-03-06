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
          <NavbarBrand className="mr-auto" href="/">Kyle Durigan</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              
               <NavItem>
                <NavLink href="/about"  >About</NavLink>
               </NavItem>

               <NavItem>
                 <NavLink href="/portfolio">Portfolio</NavLink>
               </NavItem>

               {/* <NavItem>
                 <NavLink href="/resume" active>Resume</NavLink>
               </NavItem> */}

               {/* <NavItem>
                 <NavLink href="/blog">Blog</NavLink>
               </NavItem> */}

               <NavItem>
                 <NavLink href="/contact">Contact</NavLink>
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

