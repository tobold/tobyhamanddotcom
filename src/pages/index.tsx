import {withPrefix} from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import ShimmerLink from '../components/ShimmerLink';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 60rem;
  margin: 3rem auto 0;
  font-family: sans-serif;
  white-space: nowrap;

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
    transition: 6s;

    &:hover {
      color: hotpink;
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
        <Headshot src={withPrefix('/images/toby.png')}/>
        <h1>Hello.</h1>
        <ShimmerLink href="mailto:work@tobyhamand.com">work@tobyhamand.com</ShimmerLink>
      </Container>
    );
  }
}
