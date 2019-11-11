import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Notes(works cited): Here's a divider named StyledDiv that's a divider that we made from the styled-components library.
//Those backticks are called the tagged template literal, which allows us to call functions with backticks. Source: Styled-Components documentation
// website

//Notes(works cited): The anchor tag(a) was added since Nav.Link turns into an anchor tag(link). To allow us to make the links change to the
// color white when we hover over it, we have to style the anchor element too.I think that we do this because links(anchor elements)
//are different from regular text. Source: Brice Ayres video about called
// Build a website with React, React-Bootstrap, React-Router and Styled-Components. The link: https://www.youtube.com/watch?v=tOK9l5uP06U&t=71s.
const StyledDiv = styled.div`
  a, .navbarBrand .navLink {
    color: blue;
    &:hover {
      color: black;
    }
  }
`;

//Here's a presentational component that uses the React-Bootstrap JSX elements
//DisplayNavBar is connected with App.js, which allows us to change pages using the route paths in the App.js(which uses react-router-dom library)
export class DisplayNavBar extends React.Component{
  render(){
    return(
      <StyledDiv>
        <Navbar bg="light" expand="lg" className="navbarNav">
          <Navbar.Brand className="navbarBrand">
            <Link to="/">Popular Types Of Pizza </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbarNav">
              <Nav.Link className="navLink">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className="navLink">
                <Link to="/PizzaBrands">Different Brands Of Pizza </Link>
              </Nav.Link>
              <Nav.Link className="navLink">
                <Link to="/PizzaPopCulture">Pizza In Pop Culture </Link>
              </Nav.Link>
              <Nav.Link className="navLink">
                <Link to="/WorksCited">Works Cited</Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </StyledDiv>
    )
  }
}

/*
<NavDropdown title="Pizza In Pop Culture" id="basic-nav-dropdown">
  <NavDropdown.Item href="PizzaPopCulture">Teeanage Mutant Ninja Turtles</NavDropdown.Item>
  <NavDropdown.Item href="PizzaPopCulture">Spiderman</NavDropdown.Item>
</NavDropdown>
*/

/*

*/
