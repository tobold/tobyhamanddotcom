import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import headshot from '../../public/images/toby.png';

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
        <Headshot src={headshot}/>
        <h1>Hello.</h1>
        <p>if i were a website.</p>
      </Container>
    );
  }
}
