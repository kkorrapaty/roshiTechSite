import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../Roshi-Tech-Logo.jpg'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <NavDropdown.Item href="#change-password" className="nav-dropdown">Change Password</NavDropdown.Item>
      <NavDropdown.Item href="#sign-out" className="nav-dropdown">Sign Out</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <NavDropdown.Item href="#sign-up/" className="nav-dropdown">Sign Up</NavDropdown.Item>
      <NavDropdown.Item href="#sign-in/" className="nav-dropdown">Sign In</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavDropdown title="Services" id="basic-nav-dropdown">
      <NavDropdown.Item href="#project-management" className="nav-dropdown">Project Management</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="About Us" id="basic-nav-dropdown">
      <NavDropdown.Item href="#/aboutus/" className="nav-dropdown">Company Overview</NavDropdown.Item>
      <NavDropdown.Item href='#/management-team/' className="nav-dropdown">Management Team</NavDropdown.Item>
      <NavDropdown.Item href="#service-models/" className="nav-dropdown">Service Models</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant="light" expand="md">
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
