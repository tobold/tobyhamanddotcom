import { withPrefix } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 60rem;
  margin: 3rem auto 0;
  font-family: sans-serif;

  h1 {
    color: #333;
  }

  p {
    color: #aaa;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    font-style: normal;
    color: #ccc;
    transition: 3s;

    &:hover {
      color: pink;
      transition: 0.3s;
    }
  }
`;

const Headshot = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
`;

export default class IndexPage extends React.Component<{}, {}> {

  public render() {
    return (
      <Container>
        <Headshot src={withPrefix('/images/toby.png')} />
        <h1>Hello.</h1>
        <a href="mailto:work@tobyhamand.com">work@tobyhamand.com</a>
      </Container>
    );
  }
}
