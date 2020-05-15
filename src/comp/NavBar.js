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

    const toggleNav = ()=>{
        setIsOpen(!isOpen)
    }

    const [isOpen,setIsOpen] = React.useState(false)

    window.addEventListener("scroll", function(){

        let fake = document.querySelector('.fakeNav');
        fake.classList.toggle('visible', window.scrollY>100)

        let nav = document.querySelector('.navbar');
        nav.classList.toggle('sticky',window.scrollY>100)

    })

    return(
    <div>
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/">
                Kyle Corbin
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} className="mr-2"/>
            <Collapse isOpen = {isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://docs.google.com/document/d/1xhGGkW8qx1XCKsVDJ3AEn8vNRsFYwCC6DsCHddGen8o/edit">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/contact">Contact</Link>
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