import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

function HeaderLink({ children, to, className }) {
  return (
    <LinkContainer to={to}>
      <Nav.Link className={className}>{children}</Nav.Link>
    </LinkContainer>
  )
}

export default HeaderLink
