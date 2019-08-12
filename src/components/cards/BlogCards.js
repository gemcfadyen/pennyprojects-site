import React from "react";
import Container from "../container";
import styled from "styled-components";
import CardBase from "../cards/base/base";
import CardHeader from "../cards/header/header";
import CardContent from "../cards/content/content";
import Cards from "./Cards";

const BoldText = styled.h1`
  font-weight: bold;
  font-size: 15px;
`;

const StyledDiv = styled.div`
@media screen and (min-width: 40em) {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   }
`;

const StyledCardContainer = styled.div`
@media screen and (min-width: 40em) {
   flex: 0 1 calc(50% - 1em);
   min-width: 290px;
   padding-bottom: 1em;
   }
   
   @media screen and (min-width: 60em) {
     flex: 0 1 calc(25% - 1em);
}
`;

const StyledLink = styled.a`
text-decoration: none;
`;

export default () => (

  <Container>
    <StyledDiv>
      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2017/05/01/elixir-umbrella-projects.html"}
           target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> Using an Elixir Umbrella </BoldText>
            </CardHeader>
            <CardContent>
              <div>
                Intro/excerpt
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2017/03/27/working-efficiently-with-offshore-teams.html"}
           target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> Working Effectively with Offshore Teams </BoldText>
            </CardHeader>
            <CardContent>
              <div>
                Intro/excerpt
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2017/01/19/common-code-smells.html"}
           target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> Common Code Smells </BoldText>
            </CardHeader>
            <CardContent>
              <div>
                Intro/excerpt
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2016/09/28/good-craftsman-never-blames-his-tools.html"}
           target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> A Good Craftsman Never Blames His Tools </BoldText>
            </CardHeader>
            <CardContent>
              <div>
                Intro/excerpt
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>


      <StyledCardContainer>
        <StyledLink href={"https://8thlight.com/blog/georgina-mcfadyen/2016/06/27/inside-out-tdd-vs-outside-in.html"}
           target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> TDD - From the Inside Out or the Outside In</BoldText>
            </CardHeader>
            <CardContent>
              <div>
                Intro/excerpt
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>


      <StyledCardContainer>
        <StyledLink href={"http://gemcfadyen.github.io/georginam.com/"}
           target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText>Apprenticeship Blog</BoldText>
            </CardHeader>
            <CardContent>
              <div>
                Intro/excerpt
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>


    </StyledDiv>
  </Container>
);
