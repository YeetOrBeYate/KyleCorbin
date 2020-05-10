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
  } from 'reactstrap';
  import {Link} from 'react-router-dom'

const NavBarcomp = ()=>{

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    const [isOpen,setIsOpen] = React.useState(false)

    window.addEventListener("scroll", function(){
        let fake = document.querySelector('.fakeNav');
        fake.classList.toggle('visible', window.scrollY>100)

        let nav = document.querySelector('.navbar');
        nav.classList.toggle('sticky', window.scrollY>100)
    })

    return(
    <div>
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/">
                Kyle Corbin
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"/>
            <Collapse isOpen = {isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
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
        <div className="fakeNav">
            placeholderNav
        </div>
    </div>
    )


}

export default NavBarcomp