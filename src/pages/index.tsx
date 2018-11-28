import { withPrefix } from 'gatsby';
import * as React from 'react';
import { config, Spring } from 'react-spring';
import styled from 'styled-components';
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

const HorizontalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default class IndexPage extends React.Component<{}, {}> {
  public render() {
    return (
      <Container>
        <Headshot src={withPrefix('/images/toby.png')} />
        <Spring config={config.slow} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <h1 style={props}>Hello.</h1>}
        </Spring>
        <HorizontalFlex>
          <GithubIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <StackoverflowIcon />
          <LastfmIcon />
          <FacebookIcon />
          <TwitterIcon />
        </HorizontalFlex>
        <HorizontalFlex>
          <EmailIcon />
          <ShimmerLink href="mailto:work@tobyhamand.com">
            work@tobyhamand.com
          </ShimmerLink>
        </HorizontalFlex>
      </Container>
    );
  }
}
