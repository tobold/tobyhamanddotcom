import React from 'react';
import styled from 'styled-components';
import { themeType } from '../../theme';

export const SocialIconSVG = styled.svg<{ size: number; theme: themeType }>`
  display: block;
  font-size: 0;
  list-style: none;
  margin: 0;
  text-align: center;
  height: ${props => `${props.size || 128}px`};
  width: ${props => `${props.size || 128}px`};
  color: ${props => props.theme.primary};
  fill: ${props => props.theme.primary};
  transition: 2s;

  &:hover {
    color: ${props => props.theme.primaryHover};
    fill: ${props => props.theme.primaryHover};
    transition: 0.3s;
  }
`;

type Props = { theme: themeType; path: any; href?: string; size?: number };

export class SocialIcon extends React.Component<Props> {
  public render() {
    return (
      <a href={this.props.href}>
        <SocialIconSVG viewBox="0 0 512 512" theme={this.props.theme} size={this.props.size}>
          <this.props.path />
        </SocialIconSVG>
      </a>
    );
  }
}
