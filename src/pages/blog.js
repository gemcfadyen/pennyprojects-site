import React from "react";
import Container from "../components/container";
import Link from 'gatsby-link';
import styled from "styled-components";
import BlogCards from "../components/cards/BlogCards";

const BoldText = styled.h1`
  font-weight: bold;
  font-size: 15px;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 15px;
`;

const StyledExerpt = styled.p`
  font-size: 15px;
`;

const StyledBlog = styled.div`
  border: 2px dotted darkBlue;
  margin-bottom: 5px;
  text-align: center;
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (

    <Container>
      <BlogCards/>
      {/*<div>*/}
      {/*  {posts*/}
      {/*      .filter(post => post.node.frontmatter.title.length > 0)*/}
      {/*      .map(({ node: post }) => {*/}

      {/*        return (*/}
      {/*          <StyledBlog key={post.id}>*/}
      {/*            <StyledLink to={post.frontmatter.path}>{post.frontmatter.title}</StyledLink>*/}
      {/*            <BoldText>{post.frontmatter.date}</BoldText>*/}
      {/*            <StyledExerpt>{post.frontmatter.excerpt}</StyledExerpt>*/}
      {/*          </StyledBlog>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </div>*/}
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
