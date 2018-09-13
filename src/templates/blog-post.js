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
`;

const BlogPostContainer = styled.div`
`;

export default function Template({
  data, pathContext }) {
  const post = data.markdownRemark;
  const {next, prev} = pathContext;
  console.log("next is" + next)
  console.log("next is" + prev)

  return (
    <div className="blog-post-container">
      <BlogPostContainer>
        <BoldText>{post.frontmatter.title}</BoldText>
        <hr/>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr/>
        <p>
          {prev &&  (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
          <br/>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </p>
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
