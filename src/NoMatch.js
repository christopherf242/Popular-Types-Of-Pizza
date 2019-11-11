import React from 'react';
import styled from 'styled-components';


export class NoMatch extends React.Component {

    render(){
      const StyledHeader = styled.h1`
          background-color: white;
          color: DodgerBlue;
          text-align: center;
          font-weight: bold;
          border-style: solid;
          border-width: medium;
          border-color: black;
       `;
      //Next, we let the user know that the page was not found. Also we use break jsx tags to
      //put the navbar lower.
      return (
        <div>
          <br/>
          <StyledHeader>Page Not Found</StyledHeader>
          <br/>
          <h1>Sorry, this page was not found.</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      );
    } // end of render function
  }
