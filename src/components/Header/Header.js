import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BsStarFill, BsHeartFill, BsBagFill } from 'react-icons/bs'

import HeaderLink from './HeaderLink'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="px-4 fixed-top">
      <Navbar.Brand className="d-flex align-items-center text-warning">
        <BsStarFill className="mr-1" size={20} />
        Brewdog
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav defaultActiveKey="/ " className="ml-auto">
          <HeaderLink to="/ " className="mx-4">
            All
          </HeaderLink>

          <HeaderLink to="/pizzas" className="mx-4">
            With Pizza
          </HeaderLink>

          <HeaderLink to="/steaks" className="mx-4">
            With Steak
          </HeaderLink>

          <HeaderLink to="/favorites" className="text-danger mx-4">
            Favorites
            <BsHeartFill className="ml-1" size={20} />
          </HeaderLink>

          <HeaderLink to="/cart" className="d-flex align-items-center text-success mx-4">
            Cart
            <BsBagFill className="ml-1" size={20} />
          </HeaderLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
