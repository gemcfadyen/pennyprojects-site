import React from "react";
import Container from "../container";
import styled from "styled-components";
import CardBase from "../cards/base/base";
import CardHeader from "../cards/header/header";
import StyledImage from "../cards/HeaderImage";
import CardContent from "../cards/content/content";
import TitleContent from "./content/TitleLayout";

const StyledDiv = styled.div`
@media screen and (min-width: 40em) {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   }
`;

const StyledCardContainer = styled.div`
    padding-bottom: 1rem;
@media screen and (min-width: 40em) {
   flex: 0 1 calc(50% - 1em);
   min-width: 290px;
   }
   
   @media screen and (min-width: 60em) {
     flex: 0 1 calc(25% - 1em);
}
`;

const StyledLink = styled.a`
  color: black;
`;

export default () => (
  <Container>
    <StyledDiv>

      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2017/05/01/elixir-umbrella-projects.html"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"umbrella.jpeg"}>

              </StyledImage>
            </CardHeader>
            <CardContent>
              <TitleContent>
                Using an Elixir Umbrella
              </TitleContent>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink
          href={"https://8thlight.com/blog/georgina-mcfadyen/2017/03/27/working-efficiently-with-offshore-teams.html"}
          target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl="overseas.jpg">
              </StyledImage>
            </CardHeader>
            <CardContent>
              <TitleContent>Working Effectively with Offshore Teams </TitleContent>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2017/01/19/common-code-smells.html"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"flowers.jpg"}/>
            </CardHeader>
            <CardContent>
              <TitleContent> Common Code Smells </TitleContent>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink
          href={"https://8thlight.com/blog/georgina-mcfadyen/2016/09/28/good-craftsman-never-blames-his-tools.html"}
          target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"woodwork.jpg"}>
              </StyledImage>

            </CardHeader>
            <CardContent>
              <TitleContent> A Good Craftsman Never Blames His Tools</TitleContent>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2016/06/27/inside-out-tdd-vs-outside-in.html"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"doors.jpg"}/>
            </CardHeader>
            <CardContent>
              <TitleContent> TDD - From the Inside Out or the Outside In? </TitleContent>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"http://gemcfadyen.github.io/georginam.com/"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"books.jpg"}>
              </StyledImage>
            </CardHeader>
            <CardContent>
              <TitleContent>Apprenticeship Blog</TitleContent>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>
    </StyledDiv>
  </Container>
);
