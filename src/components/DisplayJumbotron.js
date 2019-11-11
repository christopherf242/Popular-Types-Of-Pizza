import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron'; //No curly braces means that it's a default import
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import jumbotronBackgroundImage from '../assets/cheese-close-up-crust-262993.jpg';

export class DisplayJumbotron extends React.Component {
  render(){
    //We style the .jumbostron class from the regular bootstrap library because it's the class that's the Jumbotron Bootstrap component
    //I think that this tagged template literal from the styled-components library is like a CSS style selector, but we use semi colons
    // instead of commas and we can substitute variables.
    const StyledDiv = styled.div`
    .jumbotron {
      background-image: url(${jumbotronBackgroundImage});
      background-repeat: no-repeat;
      background-size: cover;
    }

    .jumbotronText {
      background-color: rgba(0, 0, 0, 0.4); /* The opacity is 0.4 */
      text-align: center;
      color: white;
    }

    `;

    return(
    <StyledDiv>
      <Jumbotron className="jumbotron">
        <div class="jumbotronText">
          <h1>Popular Types Of Pizza</h1>
          <br/>
          <br/>
        </div>
      </Jumbotron>
    </StyledDiv>
    );
  }
}
