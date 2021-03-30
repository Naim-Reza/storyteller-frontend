import React, { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { useHistory } from "react-router";
import urls from "../config/urls";

export default function WebNav() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark color="primary" expand="md">
      <NavbarBrand href="/">StoryTeller</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink onClick={() => history.push("/")}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => history.push(urls.stroies)}>
              Stories
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Join
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => history.push(urls.login)}>
                Login
              </DropdownItem>
              <DropdownItem onClick={() => history.push(urls.register)}>
                Signup
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
