import React from "react";
import Link from "gatsby-link";
import Footer from "../components/footer";
import styled from "styled-components";

const PageStyleForWholeSite = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 1.25rem 1rem;
  background: lightBlue;
  box-shadow: inset 0 0 0 2px darkBlue;
`;

const StyledList = styled.ul`
  listStyle: none;
  float: right;
`;

const StyledHeader = styled.header`
 marginBottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  textShadow: none;
  backgroundImage: none;
`;

const InlineHeader = styled.h3`
  display: inline;
`;

const StyledListElement = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

const ListLink = props =>
  <StyledListElement>
    <Link to={props.to}>
      {props.children}
    </Link>
  </StyledListElement>

  export default ({ children }) =>
    <PageStyleForWholeSite>
      <StyledHeader>
        <StyledLink to="/">
          <InlineHeader>Penny Projects Ltd</InlineHeader>
        </StyledLink>
        <StyledList>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/talks">Talks</ListLink>
        </StyledList>
      </StyledHeader>
      {children()}
      <Footer/>
    </PageStyleForWholeSite>
