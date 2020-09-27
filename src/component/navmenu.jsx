import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import './css/navmenu.css';

const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navmen" >
      <Navbar  color="light" light expand="md">
        <NavbarBrand href="/" className="logo">Rahma Kitchen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Bento</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Cara Pemesanan</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Kue
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Kue Kering
                </DropdownItem>
                <DropdownItem>
                  Kue Basah
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Paket
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                  Bento
                </DropdownItem>
                <DropdownItem>
                  Snack Box
                </DropdownItem>
                <DropdownItem>
                  Kue Pernikahan
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">Tips Trik</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Contact</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;
