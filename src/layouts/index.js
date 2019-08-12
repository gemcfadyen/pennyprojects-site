import React from "react";
import Link from "gatsby-link";
import Footer from "../components/footer";
import styled from "styled-components";
import CardWrapper from "../components/cards/CardWrapper";

const Gutter = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const PageStyleForWholeSite = styled.div`
  padding: 1.25rem 1rem;
  background: lightBlue;
  box-shadow: inset 0 0 0 2px darkBlue;
`;

const StyledList = styled.ul`
  listStyle: none;
  float: right;
  display: flex;
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

// todo should the header/footer be a different colour or in line with the rest of the content? (ie put the header back insdide the gutter tags
export default ({children}) =>
  <PageStyleForWholeSite>
    <Gutter>
      <StyledHeader>
        <StyledLink to="/">
          <InlineHeader>Penny Projects Ltd</InlineHeader>
        </StyledLink>
        <StyledList>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/talks">Talks</ListLink>
          <ListLink to="/training">Training</ListLink>
        </StyledList>
      </StyledHeader>
      <CardWrapper>
        {children()}
      </CardWrapper>

      <Footer/>
    </Gutter>
  </PageStyleForWholeSite>


// export default ({children}) =>
//   <PageStyleForWholeSite>
//     <div style={{background: "lightcyan", height: "100%", padding: "2rem"}}>
//       <StyledHeader>
//         <StyledLink to="/">
//           <InlineHeader>Penny Projects Ltd</InlineHeader>
//         </StyledLink>
//         <StyledList>
//           <ListLink to="/">Home</ListLink>
//           <ListLink to="/blog">Blog</ListLink>
//           <ListLink to="/talks">Talks</ListLink>
//           <ListLink to="/training">Training</ListLink>
//         </StyledList>
//       </StyledHeader>
//     </div>
//     <Gutter>
//       <CardWrapper>
//         {children()}
//       </CardWrapper>
//
//     </Gutter>
//     <Footer/>
//   </PageStyleForWholeSite>