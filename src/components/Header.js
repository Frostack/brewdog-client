import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsStarFill, BsHeartFill, BsBagFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="light" className="px-4 fixed-top">
      <Navbar.Brand className="d-flex align-items-center text-warning">
        <BsStarFill className="mr-1" size={20} />
        Brewdog
      </Navbar.Brand>

      <Nav defaultActiveKey="/ " className="ml-auto">
        <LinkContainer className="mx-4" to="/ ">
          <Nav.Link>All</Nav.Link>
        </LinkContainer>

        <LinkContainer className="mx-4" to="/pizzas">
          <Nav.Link>With Pizza</Nav.Link>
        </LinkContainer>

        <LinkContainer className="mx-4" to="/steaks">
          <Nav.Link>With Steak</Nav.Link>
        </LinkContainer>

        <LinkContainer className="mx-4 text-danger" to="/favorites">
          <Nav.Link>
            Favorites
            <BsHeartFill className="ml-1" size={20} />
          </Nav.Link>
        </LinkContainer>

        <LinkContainer className="mx-4" to="/cart">
          <Nav.Link className="d-flex align-items-center text-success">
            Cart
            <BsBagFill className="ml-1" size={20} />
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default Header;
