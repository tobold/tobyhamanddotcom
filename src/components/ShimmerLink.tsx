import * as React from 'react';
import styled from 'styled-components';

const InlineA = styled.a`
  display: inline-block;
`;

interface Props {
  href: string;
}

export default class ShimmerLink extends React.Component<Props, {}> {
  public render = () => {
    const childrenArray = typeof this.props.children === 'string' ? this.props.children.split('') : [];
    return (
      <div>
        {childrenArray.map(
          (letter, index) => <InlineA key={index} href={this.props.href}>{letter}</InlineA>,
        )}
      </div>
    );
  }
}
