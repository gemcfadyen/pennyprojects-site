import React from "react";
import Link from 'gatsby-link';
import styled from "styled-components";

const BoldText = styled.h1`
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const BlogContent = styled.div`
  font-size: 15px;
  text-align: left;
`;

const BlogPostContainer = styled.div`
  align-content: center;
  text-align: center;
`;

const BlogLink = styled(Link)`
 width: 50%;
 font-size: 12px;
`;

const NavigateBlogs = styled.p`
  display: flex;
  flex-direction: row;
`;

export default function Template({
  data, pathContext }) {
  const post = data.markdownRemark;
  const {next, prev} = pathContext;

  return (
    <div className="blog-post-container">
      <BlogPostContainer>
        <BoldText>{post.frontmatter.title}</BoldText>
        <hr/>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr/>
        <NavigateBlogs>
          {prev &&  (
            <BlogLink to={prev.frontmatter.path}>
              ← {prev.frontmatter.title}
            </BlogLink>
          )}
          {next && (
            <BlogLink to={next.frontmatter.path}>
              {next.frontmatter.title} →
            </BlogLink>
          )}

        </NavigateBlogs>
      </BlogPostContainer>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
                  frontmatter {
                          date(formatString: "MMMM DD, YYYY")
                                  path
                                          title
                                                }
                                                    }
                                                      }
                                                      `
;
