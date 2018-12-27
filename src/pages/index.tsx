import { withPrefix } from 'gatsby';
import * as React from 'react';
import { config, Spring } from 'react-spring';
import styled, { createGlobalStyle } from 'styled-components';
import ShimmerLink from '../components/ShimmerLink';
import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LastfmIcon,
  LinkedinIcon,
  StackoverflowIcon,
  TwitterIcon,
} from '../components/SocialIcon';

const GlobalStyle = createGlobalStyle<{ darkMode: boolean }>`
  body {
    background-color: ${props => (!props.darkMode ? 'white' : 'black')};
    color: ${props => (props.darkMode ? 'white' : 'black')};
    padding: 0;
    transition: 3s;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3rem;
  box-sizing: border-box;
  font-family: sans-serif;
`;

const Headshot = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
`;

const HorizontalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const DarkModeButton = styled.button`
  opacity: 0.5;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  top: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 0;
  padding-top: 5px;
  font-size: 30px;

  &:focus {
    outline: none;
  }
`;

export default class IndexPage extends React.Component<{}, { darkMode: boolean }> {
  state = {
    darkMode: false,
  };

  public render() {
    return (
      <Container>
        <DarkModeButton onClick={() => this.setState({ darkMode: !this.state.darkMode })}>
          {this.state.darkMode ? '☀️' : '🌙'}
        </DarkModeButton>
        <GlobalStyle darkMode={this.state.darkMode} />

        <Headshot src={withPrefix('/images/toby.png')} />
        <Spring config={config.slow} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <h1 style={props}>Hello.</h1>}
        </Spring>
        <HorizontalFlex>
          <GithubIcon darkMode={this.state.darkMode} />
          <InstagramIcon darkMode={this.state.darkMode} />
          <LinkedinIcon darkMode={this.state.darkMode} />
          <StackoverflowIcon darkMode={this.state.darkMode} />
          <LastfmIcon darkMode={this.state.darkMode} />
          <FacebookIcon darkMode={this.state.darkMode} />
          <TwitterIcon darkMode={this.state.darkMode} />
        </HorizontalFlex>
        <HorizontalFlex>
          <EmailIcon darkMode={this.state.darkMode} />
          <ShimmerLink href="mailto:work@tobyhamand.com">work@tobyhamand.com</ShimmerLink>
        </HorizontalFlex>
      </Container>
    );
  }
}
