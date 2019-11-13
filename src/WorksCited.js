import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import newYorkPizzaPicOne from './assets/New_York_Style_Pizza_Pic_1_v2.jpg';


export class WorksCited extends React.Component{

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

    const StyledDiv = styled.div`
      #works-cited-title {
        text-align: center;
        font-weight: bold;
        font-size: 2em;
      }

      .works-cited {
        text-align: left;
        font-family: "Times New Roman", Times, serif;
      }

      .cited-source {
        text-align: left;
      }

      #centerWorksCited {
        display: flex;
        justify-content: center;
      }
    `;

    return(
      <StyledDiv>
        <br/>
        <StyledHeader>Works Cited Page </StyledHeader>
        <br/>
        <Container>
          <br/>
          <Row>
            <div id="centerWorksCited">
              <Col xs={12} sm={6}>
                <Card>
                  <Card.Img variant="top" src={newYorkPizzaPicOne}/>
                  <Card.Body>
                    <Card.Title id="works-cited-title">Works Cited</Card.Title>
                    <Card.Text>
                      <div className="works-cited">
                        <p className="cited-source">AFGuidesHD. “Spider-Man PS4 - Pizza Time.” YouTube, YouTube, 22 Oct. 2018, https://www.youtube.com/watch?v=qh9yn9vGNzg.
                        Accessed 5 November 2019</p>
                        <p className="cited-source">Ayres, Brice. “Build a Website with React, React-Bootstrap, React-Router and Styled-Components.”
                         YouTube, YouTube, https://www.youtube.com/watch?v=tOK9l5uP06U&t=71s. </p>
                        <p className="cited-source">"Can't Resolve react-router-dom #231" GitHub,
                          https://github.com/react-bootstrap/react-router-bootstrap/issues/231 </p>
                        <p className="cited-source">Luce, Ivan De. “Pizza Hut Is Rebooting Its Iconic 'Red Roof' Logo with a Retro Design.” Business Insider,
                           Business Insider, 27 June 2019, https://www.businessinsider.com/pizza-hut-brings-back-old-logo-2019-6. Accessed 6 November 2019.</p>
                        <p className="cited-source">Lutz, Ashley. "Here's A Pie Chart Of The Most Popular Pizza Toppings" Business Insider, Business Insider,
                                                      10 October 2014, https://www.businessinsider.com/the-most-popular-pizza-toppings-chart-2013-10. Accessed
                                                      7 November 2019.</p>
                        <p className="cited-source">Muffin, “Baked Pizza” Pexels, https://www.pexels.com/photo/baked-pizza-1653772/.</p>
                        <p className="cited-source">“Picks for $6 - Mix & Match Pizza and Sides.” Papa John's, https://www.papajohns.com/order/menu/pizza/picks-for-6.
                         Accessed 1 November 2019.</p>
                        <p className="cited-source">(Note: I used 3 pictures) Pixabay, “Cheese Close Up Food. Vegetables Italian Pizza. Pepperoni Pizza” Pexels,
                         https://www.pexels.com/@pixabay. 30 October 2019.</p>
                        <p className="cited-source">"Pizza Hut - We're Ready for the NFL Draft, Are You?" Pizza Hut
                        , https://www.facebook.com/pizzahutus/posts/were-ready-for-the-nfl-draft-are-you-/10155822457947415/. Accessed 26 October 2019</p>
                        <p className="cited-source">SmileMakers, “Teenage Mutant Ninja Turtles Pin the Pizza Party Game - Birthday and Theme Party Supplies By SmileMakers.”
                         Walmart.com, https://www.walmart.com/ip/Teenage-Mutant-Ninja-Turtles-Pin
                         -the-Pizza-Party-Game-Birthday-and-Theme-Party-Supplies-By-SmileMakers/252694845. Accessed 1 November 2019.</p>
                         <p className="cited-source">Styled Components. “Styled-Components.” Styled Components, https://www.styled-components.com/.</p>
                         <p className="cited-source"> Little Caesars, "Classic Pizzas." https://littlecaesars.com/en-us/. Accessed 8 November 2019.</p>
                         <p className="cited-source"> Papa John's, "Sausage Pizza." https://www.papajohns.com/order/menu/pizza/sausage-pizza.
                          Accessed 7 November 2019.</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Row>
          <br/>
        </Container>
      </StyledDiv>
    )
  }
}
