import { withPrefix } from 'gatsby';
import React from 'react';
import { config, Spring } from 'react-spring';
import styled, { createGlobalStyle } from 'styled-components';
import ShimmerLink from '../components/ShimmerLink';
import {
  EmailPath,
  FacebookPath,
  GithubPath,
  InstagramPath,
  LastfmPath,
  LinkedinPath,
  StackoverflowPath,
  TwitterPath,
} from '../components/SocialIcon/IconPaths';
import { SocialIcon } from '../components/SocialIcon/SocialIcon';
import {
  EmailUrl,
  FacebookUrl,
  GithubUrl,
  InstagramUrl,
  LastfmUrl,
  LinkedinUrl,
  StackoverflowUrl,
  TwitterUrl,
} from '../components/SocialIcon/SocialLinks';
import { darkTheme, lightTheme } from '../theme';

const GlobalStyle = createGlobalStyle<{ darkMode: boolean }>`
  body {
    background-color: ${props => (!props.darkMode ? darkTheme.primary : lightTheme.primary)};
    color: ${props => (props.darkMode ? darkTheme.primary : lightTheme.primary)};
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
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const DownloadButton = styled.a`
  margin-top: 20px;
  text-decoration: none;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  padding: 5px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  transition: 3s;
`;

export default class IndexPage extends React.Component<{}, { darkMode: boolean }> {
  state = {
    darkMode: false,
  };

  public render() {
    const theme = this.state.darkMode ? darkTheme : lightTheme;
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
          <SocialIcon theme={theme} path={GithubPath} href={GithubUrl} />
          <SocialIcon theme={theme} path={InstagramPath} href={InstagramUrl} />
          <SocialIcon theme={theme} path={LinkedinPath} href={LinkedinUrl} />
          <SocialIcon theme={theme} path={StackoverflowPath} href={StackoverflowUrl} />
          <SocialIcon theme={theme} path={LastfmPath} href={LastfmUrl} />
          <SocialIcon theme={theme} path={FacebookPath} href={FacebookUrl} />
          <SocialIcon theme={theme} path={TwitterPath} href={TwitterUrl} />
        </HorizontalFlex>
        <HorizontalFlex>
          <SocialIcon theme={theme} path={EmailPath} href={EmailUrl} size={24} />
          <ShimmerLink href="mailto:work@tobyhamand.com">work@tobyhamand.com</ShimmerLink>
        </HorizontalFlex>
        <DownloadButton href={withPrefix('/documents/cv.pdf')} theme={theme} download>
          Download CV
        </DownloadButton>
      </Container>
    );
  }
}
