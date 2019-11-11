import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import dominosPicOne from './assets/Dominos_pizza_from_Facebook.jpg';
import pizzaHutPicOne from './assets/Pizza_Hut_Pic_Business_Insider.jpg';
import papaJohnsPizzaPicOne from './assets/Papa_Johns_pepperoni_pizza.jpg';
import pizzaHutLogo from './assets/pizza_hut_logo.jpg';
import littleCaesarsPizza from './assets/little-caesars-menu-img-classic-pizzas.jpg';

export class PizzaBrands extends React.Component {
    render(){
      const StyledDiv = styled.div`
        .boldBlueText {
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
          <br/>
          <StyledHeader>Pizza Brands </StyledHeader>
          <br/>
          <Container>
            <Row>
              <div id="centerIntro">
                <Col xs={12} sm={8}>
                  <Card>
                    <Card.Img variant="top" src={pizzaHutLogo}/>
                    <span>The Pizza Hut Logo. Image source: Business Insider and Pizza Hut.</span>
                    <Card.Body>
                      <Card.Title><span className="boldBlueText">Popular Pizza Brands</span></Card.Title>
                      <Card.Text>
                          Pizza Hut, Little Caesars, Dominos and Pizza Hut are some of the most popular brands of pizza.
                          All of them make great pizza and their pizza are often seen on television.
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
                  <Card.Img variant="top" src={dominosPicOne} />
                  <span>Picture of delicious Dominos Pizza. Image source: Dominos Pizza on Facebook</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Dominos</span></Card.Title>
                    <Card.Text>
                      Dominos has a lot of different toppings like pepperoni, buffalo chicken and vegetables.
                      My favorite pizza toppings are sausage and pepperoni. It’s one of my favorite fast food restaurants.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={pizzaHutPicOne} />
                  <span>Picture of pizza from Pizza Hut, which is great too. Image source: Pizza Hut on Facebook.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Pizza Hut</span></Card.Title>
                    <Card.Text>
                      Pizza Hut is one of the most popular brands of pizza too and it’s similar to Dominoes.
                       It also has sit down restaurants that I always enjoy eating at too.
                        They offer pizza like deep dish pizza(Chicago style pizza) too.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={papaJohnsPizzaPicOne} />
                  <span>Picture of some really good Papa John's Pizza. Image source: Papa John's website.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Papa John's</span></Card.Title>
                    <Card.Text>
                      Papa John's is one of the most popular pizza brands too. It's so popular that Shaquille O'Neal
                      even owns a Papa John's restaurant, which is very cool.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={littleCaesarsPizza} />
                  <span>Picture of some delicious looking Little Caesars Pizza. Image source: Little Caesars website.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Little Caesars</span></Card.Title>
                    <Card.Text>
                      Little Caesars is the most popular carry-out only restaurant. It's because
                       Little Caesars has good pizza and it's a big name brand too.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
          </Container>
        </StyledDiv>
      );
    } // end of render function
  }
