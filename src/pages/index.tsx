import * as React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-content: center;
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
    } = this.props.data.site.siteMetadata;

    return (
      <Container>
        <h1>{name}</h1>
        <p>{tagline}</p>
      </Container>
    );
  }
}
