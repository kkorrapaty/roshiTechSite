import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../Roshi-Tech-Logo.jpg'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown title="Profile">
      <NavDropdown.Item href="#sign-up/" className="basic-nav-dropdown">Sign Up</NavDropdown.Item>
      <NavDropdown.Item href="#sign-in/" className="basic-nav-dropdown">Sign In</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavDropdown title="Services">
      <NavDropdown.Item href="#project-management" className="basic-nav-dropdown">Project Management</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="About Us">
      <NavDropdown.Item href="#aboutus/" className="basic-nav-dropdown">Company Overview</NavDropdown.Item>
      <NavDropdown.Item href="#management-team/" className="basic-nav-dropdown">Management Team</NavDropdown.Item>
      <NavDropdown.Item href="#service-models/" className="basic-nav-dropdown">Service Models</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#/">
      <img src={logo} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
