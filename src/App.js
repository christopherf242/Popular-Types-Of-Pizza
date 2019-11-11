import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  //This routing library allows us to change libraries
import { Home } from './Home.js';
import { PizzaBrands } from './PizzaBrands.js';
import { PizzaPopCulture } from './PizzaPopCulture.js';
import { NoMatch }from './NoMatch.js';
import { Layout } from './components/Layout.js';
import { DisplayNavBar } from './components/DisplayNavBar.js';
import { DisplayBottomNav } from './components/DisplayBottomNav.js';
import { DisplayJumbotron } from './components/DisplayJumbotron.js';
import { WorksCited } from './WorksCited.js';
import styled from 'styled-components';

//Notes(works cited) on Single Page website Application:
// I added the website content in the Router classes so that page doesn't refresh. Also I put the
// Link element from the react-router-dom libary to use that router without refreshing page(to avoid having the logo that's on
//the tab part of website refresh).
class App extends React.Component {
    render(){
      const StyledDiv = styled.div`
        .app {
          text-align: center;
        }
      `;
      return (
        <StyledDiv>
          <div className="app">
            <Router>
              <DisplayNavBar/>
              <DisplayJumbotron/>
              <Layout>
                <Switch> /* Switch allows us to switch between different routes */
                  <Route exact path="/" component={Home} /> /*Match exactly so that we always go to the Home page first */
                  <Route path="/Home" component={Home} /> /*I added another another route that allows us to click on a link from another page to go the Home page */
                  <Route path="/PizzaBrands" component={PizzaBrands} />
                  <Route path="/PizzaPopCulture" component={PizzaPopCulture} />
                  <Route path ="/WorksCited" component={WorksCited} />
                  <Route component={NoMatch} /> /* A 404 Resource Not Found error page */
                </Switch>
              </Layout>
              <DisplayBottomNav/>
            </Router>
          </div>
        </StyledDiv>
      );
    } // end of render function
  }

export default App;
