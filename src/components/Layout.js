import React from 'react';
import Container from 'react-bootstrap/Container';

//Notes(works cited): This layout uses the React-Bootstrap component that's called container. It's used the bootstrap grid and it makes sure that
// everything stays centered(Adding rows and columns allows you to edit the spacing since Bootstrap uses CSS Flexbox display).
//Also all of the jsx elements that are in between the Layout opening and closing tags(when we render it), are considered the props.children
//Also props are considered the parameter for this functional component. Source: Brice Ayres video about called
// Build a website with React, React-Bootstrap, React-Router and Styled-Components. The link: https://www.youtube.com/watch?v=tOK9l5uP06U&t=71s.
export const Layout = (props) => (
  <Container>
    {props.children}
  </Container>
)
