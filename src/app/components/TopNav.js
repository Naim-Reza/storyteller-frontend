import React, { useState } from "react";
import { useHistory } from "react-router";
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

import urls from "../config/urls";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark color="primary" expand="md">
      <NavbarBrand href="/">Story Teller</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink onClick={() => history.push(urls.dashboard)}>
              Dashboard
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Stories
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => history.push(urls.stroies)}>
                View All Stories
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => history.push(urls.addnewstory)}>
                Add New Story
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Reza
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => console.log("logout")}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
