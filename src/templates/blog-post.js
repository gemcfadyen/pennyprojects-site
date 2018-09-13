import React from "react";
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
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <BlogPostContainer>
        <BoldText>{post.frontmatter.title}</BoldText>
        <hr/>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr/>
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
