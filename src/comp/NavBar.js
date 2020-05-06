import React from 'react'
// import {Navbar, NavbarBrand, NavbarToggler} from 'reactstrap'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const NavBarcomp = ()=>{

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    const [isOpen,setIsOpen] = React.useState(false)

    return(
    <div>
        <Navbar color="primary" light expand="md">
            <NavbarBrand>
                Kyle Corbin
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"/>
            <Collapse isOpen = {isOpen} navbar>
            <Nav>
                <NavItem>
                    <NavLink>Portfolio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Resume</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>
    )


}

export default NavBarcomp