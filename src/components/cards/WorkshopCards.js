import React from "react";
import Container from "../container";
import styled from "styled-components";
import CardBase from "../cards/base/base";
import CardHeader from "../cards/header/header";
import CardContent from "../cards/content/content";

const ExternalLink = styled.a`
  padding-right: 5px;
  text-decoration: none;
  display: block;
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
        <StyledLink href={"http://www.elixirconf.eu/elixirconf2017/georgina-mcfadyen"}
           target="_blank">
        <CardBase interactive={true}>
          <CardHeader>
            <BoldText> Microservices Under the Umbrella </BoldText>
            Elixir EU Workshops
            Barcelona, May 2017
          </CardHeader>
          <CardContent>
            <div>
              This workshop was held in Barcelona, Spain as part of Elixir EU in May 2017.
            </div>
            <br/>

            <ExternalLink href="http://www.elixirconf.eu/elixirconf2017/georgina-mcfadyen" width="210" height="182">
              Click here to view the event
            </ExternalLink>

          </CardContent>
        </CardBase>
        </StyledLink>
      </StyledCardContainer>


      <StyledCardContainer>
        <StyledLink href={"https://www.meetup.com/8LU-London/events/237311782/"}
           target="_blank">
        <CardBase interactive={true}>
          <CardHeader>
            <BoldText> 8LU Legacy Code Retreat </BoldText>
            8th Light University Meetup
            London, February 2017
          </CardHeader>
          <CardContent>
            <div>
              This workshop was held in Barcelona, Spain as part of Elixir EU in May 2017.
            </div>
            <br/>

            <ExternalLink href="https://www.meetup.com/8LU-London/events/237311782/" width="210" height="182">
              Click here to view the event
            </ExternalLink>
          </CardContent>
        </CardBase>
        </StyledLink>
      </StyledCardContainer>


      <StyledCardContainer>
        <StyledLink href={"https://www.meetup.com/london-software-craftsmanship/events/235776594"}
           target="_blank">
        <CardBase interactive={true}>
          <CardHeader>
            <BoldText> Extract Your Own Test Framework </BoldText>
            London Software Craftsmanship Community (LSCC) Meetup
            London, December 2016
          </CardHeader>
          <CardContent>
            <div>
              This workshop was held in Barcelona, Spain as part of Elixir EU in May 2017.
            </div>
            <br/>
          </CardContent>
        </CardBase>
        </StyledLink>
      </StyledCardContainer>

    </StyledDiv>
  </Container>
);
