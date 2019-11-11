import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import introPic from './assets/Dominos_pizza_from_Facebook_pic2.jpg';
import newYorkPizzaPicTwo from './assets/New_York_Style_Pizza_Pic_2.jpg';
import chicagoPizzaPicOne from './assets/Food_Network_Deep_Dish_Pizza.jpeg';
import pixabayPepperoniPizza from './assets/Pixabay-Pexels-Pepperoni-Pizza.jpg';
import papaJohnsSausagePizza from './assets/Papa_Johns_Twitter_Sausage_Pizza.jpg';
//import './Home.css';

//We export Home using the named Export format
export class Home extends React.Component {
  render(){
    //Note: I'm using a divider for the StyledCompnent library since I'll change the style of a group of elements/
    //Note: Also I think that the variables that hald a value from the styled-components library have to be spelled with
    // a capital letter as the first letter.
    const StyledDiv = styled.div`

      .Home {
        text-align: center;
      }

      .smallerPicVersion {
        height: 40%;
      }

      .boldBlueText{
        color: blue;
        font-weight: bold;
      }

      #centerIntro {
        display: flex;
        justify-content: center;
      }
    `;

    const StyledHeader = styled.h1`
        background-color: white;
        color: DodgerBlue;
        text-align: center;
        font-weight: bold;
        border-style: solid;
        border-width: medium;
        border-color: black;
     `;

    return (
      <StyledDiv>
        <div className="Home">
          <br/>
          <StyledHeader>Home </StyledHeader>
          <br/>
          <Container>
            <Row>
              <div id="centerIntro">
                <Col xs={12} sm={8}>
                  <Card>
                    <Card.Img variant="top" src={introPic}/>
                    <span>Pictures of Dominos Pepperoni Pizza. Image source: Dominos on Facebook.</span>
                    <Card.Body>
                      <Card.Title><span className="boldBlueText">Introduction</span></Card.Title>
                      <Card.Text>
                        I've had both New York and Chicago style pizzas. Both are not only great, but really popular. Also, I love ordering pizza from Dominos and I love going to
                        Pizza Hut(they even have sit down restaurants). Additionally, there are a lot of television shows where the main characters love to eat pizza too.
                        Here are some of the most popular types of pizza, some of the most popular pizza brands and more. Thanks for visiting my portfolio project.
                        Also my Works Cited section can be viewed on my Works Cited page.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </Row>
            <br/>
            <Row>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={newYorkPizzaPicTwo}/>
                  <span>Picture of great New York Style Pizza.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">New York Style Pizza</span></Card.Title>
                    <Card.Text>
                      Personally, New York style pizza is one of my favorite types of pizza. It's thin, but the slices of pizza are wider than Chicago style Pizza.
                        It also makes for a great meal at a party. It’s the type of pizza that's seen all of the time in shows
                         like Teenage Mutant Ninja Turtles.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={chicagoPizzaPicOne} />
                  <span>Picture of delicious looking Chicago style Pizza. Image source: Food Network.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Chicago Style Pizza</span></Card.Title>
                    <Card.Text>
                      Chicago style pizza is also one of my favorite types of pizzas too. Chicago style pizza is a deep dish style
                       pizza that has extra cheese and tomato sauce. I usually have less slices of Chicago style pizza because
                       the pizza is more of a meal. Chicago style pizza is more thick than New York style pizza.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={pixabayPepperoniPizza}/>
                  <span>Picture of a cool looking pepperoni pizza in a box. Image source: Pixabay on the pexels website.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Pepperoni Pizza</span></Card.Title>
                    <Card.Text>
                      In an article on the Business Insider's website, it says that 36% of people order pepperoni on their
                      pizza(Lutz, "Here's A Pie Chart Of The Most Popular Pizza Toppings"). Pepperoni is one of my favorite types of pizza toppings.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={papaJohnsSausagePizza} />
                  <span>Picture of a tasty looking sausage pizza from Papa John's pizza. Image source: Papa John's.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Sausage Pizza</span></Card.Title>
                    <Card.Text>
                      Sausage is one of my favorite toppings for pizzas too. According to Business Insider,
                      it's the second most popular topping for pizza. Fourteen percent of people ordered sausages on their pizzas
                      (Lutz, "Here's A Pie Chart Of The Most Popular Pizza Toppings"). Also pepperoni is technically a type of sausage too.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
          </Container>
        </div>
      </StyledDiv>
    );
  }
}
/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  <Button />
</header>
*/
/*
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
*/
