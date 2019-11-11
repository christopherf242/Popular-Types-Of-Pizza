import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//Works Cited Notes(): Here's a styled component that acts as a wrapper to style other components.
//here's a string literal that's interpreted (ES6 or ES7 feature).
//The &: hover part allows us to add the :hover part so that we can style
// those elements when the user hovers over those elements.
const StyledDiv = styled.div`
  .bottomNav {
    display: flex;
    justify-content: center;
    background-color: white; /*light gray */
  }

  a, .navLink {
    color: blue;

    &:hover {
      color: black;
    }
  }
`;

//Here's a presentational component that uses the React-Bootstrap JSX elements
// I commented this part out of the opening Nav JSX tag: onSelect={selectedKey => alert(`selected ${selectedKey}`)}
export class DisplayBottomNav extends React.Component{
  render(){
    return(
      <StyledDiv>
        <Nav
          activeKey="/home"

          className="bottomNav"
        >
          <Nav.Item>
            <Nav.Link className="navLink">
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink">
              <Link to="/PizzaBrands">Different Brands Of Pizza </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink">
              <Link to="/PizzaPopCulture">Pizza In Pop Culture </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink">
              <Link to="/WorksCited">Works Cited</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </StyledDiv>
    )
  }
}
