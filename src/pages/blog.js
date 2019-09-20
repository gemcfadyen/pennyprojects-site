import React from "react";
import Container from "../components/container";
import BlogCards from "../components/cards/BlogCards";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (

    <Container>
      <BlogCards/>
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                    node {
                      excerpt(pruneLength: 250)
                         id
                         frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                            excerpt
                            path
                         }
                      }
                 }
      }
  }
`;
