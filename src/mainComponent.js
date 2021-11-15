import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default class MainComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Login</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Features</Nav.Link>
              <Nav.Link >Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }

}