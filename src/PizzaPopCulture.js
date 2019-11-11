import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import spidermanWithPizza from './assets/Spiderman_Youtube_Pizza.jpg';
import pizzaHutNfl from './assets/Pizza_Hut_and_NFL_pic.jpg';
import teenageMutantNinjaTurtlesPizzaTime from './assets/Teenage_Mutant_Ninja_Turtles_With_Pizzas.jpeg';
import closeUpPizzaPic from './assets/close-up-cuisine-delicious-1653772.jpg';
import vegetablePizza from './assets/pixabay-pexels-vegetables-italian-pizza-restaurant.jpg';

export class PizzaPopCulture extends React.Component {

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
          <StyledHeader>Pizza Pop Culture </StyledHeader>
          <br/>
          <Container>
            <Row>
              <div id="centerIntro">
                <Col xs={12} sm={8}>
                  <Card>
                    <Card.Img variant="top" src={closeUpPizzaPic} />
                    <span>Here's some pizza up close. Image source: A User named Muffin posted it on the website named Pexels.</span>
                    <Card.Body>
                      <Card.Title><span className="boldBlueText">Pizza In Pop Culture</span></Card.Title>
                      <Card.Text>
                        Home Alone, Teenage Mutant Ninja Turtles, Spiderman, and the NFL are some of the most popular examples in
                        sports, media and entertainment that are often associated with pizza.
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
                  <Card.Img variant="top" src={vegetablePizza} />
                  <span>Here's some vegetable italian pizza. Image source: Pixabay on the Pexels website.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Home Alone</span></Card.Title>
                    <Card.Text>
                      In Home Alone, Kevin McCallister loves eating pizza. Kevin orders an entire pizza for himself in both movies(which is amazing
                        since he's around 10 years old). His family also loves pizza too, which is shown when they ordered about 10 pizzas.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={spidermanWithPizza} />
                  <span>Here's a picture of Spider-Man with some pizza that he's getting ready to eat. Image source: AFGuidesHD on YouTube.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Spider-Man</span></Card.Title>
                    <Card.Text>
                      In Spider-Man, Spider-Man also loves to have Pizza. In the newest Spider-Man game, Spider-Man takes a break
                       from defeating villains by eating some pizza. In some of the older Spider-Man games, Spider-Man delivers
                       pizza as a fun mini game.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={teenageMutantNinjaTurtlesPizzaTime} />
                  <span>Here's a picture of the Teenage Mutant Ninja Turtles eating pizza and playing video games. Image source: SmileMakers' poster on the Walmart website.</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">Teenage Mutant Ninja Turtles</span></Card.Title>
                    <Card.Text>
                      In the Teenage Mutant Ninja Turtles TV shows, the turtles love to eat pizza(especially Michelangelo).
                      They usually have the New York style pizza because they live in the sewers of New York. They love having pizza parties
                      and even share the pizza with Master Splinter too.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={pizzaHutNfl} />
                  <span>Here's a picture of an advertisement that has the NFL Logo with the Pizza Hut Logo. Image source: Pizza Hut on Facebook</span>
                  <Card.Body>
                    <Card.Title><span className="boldBlueText">NFL and Pizza Hut</span></Card.Title>
                    <Card.Text>
                    The NFL is sponsored by Pizza Hut. Pizza Hut has commercials with top players like Juju Smith-Schuster,
                    Aaron Donald and Todd Gurley in it. They even made a YouTube video about a pizza party that Juju had with
                    some of his Pittsburgh Steeler’s teammates. Not only that, but pizza is a great meal to have at Super
                    Bowl parties too.
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
