import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    render() {
        return (
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink href="#" active>Home</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Portfolio</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Resume</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Blog</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </div>
        );
      }    
}