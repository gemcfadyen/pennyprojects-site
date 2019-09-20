import React from "react";
import Container from "../container";
import styled from "styled-components";
import CardBase from "../cards/base/base";
import CardHeader from "../cards/header/header";
import CardContent from "../cards/content/content";
import StyledImage from "./HeaderImage";
import TitleLayout from "./content/TitleLayout";
import ConferenceDetails from "./content/conferenceDate";
import StyledCardContainer from "./StyledContainer";

const StyledDiv = styled.div`
@media screen and (min-width: 40em) {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   }
`;

const StyledLink = styled.a`
  color: black;
`;

export default () => (
  <Container>
    <StyledDiv>
      <StyledCardContainer>
        <StyledLink href={"http://www.elixirconf.eu/elixirconf2017/georgina-mcfadyen"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"Barcalona.jpeg"}/>
            </CardHeader>
            <CardContent>
              <TitleLayout> Microservices Under the Umbrella </TitleLayout>
              <ConferenceDetails event={"Elixir EU Workshop"} date={"May 2017"} location={"Barcelona, Spain"}/>
              <br/>
              <div>
                One day workshop taking students through how to deploy different
                OTP apps using umbrella applications using TDD and Distributed Erlang.
              </div>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://www.meetup.com/8LU-London/events/237311782/"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"code.jpg"}/>
            </CardHeader>
            <CardContent>
              <TitleLayout> 8LU Legacy Code Retreat </TitleLayout>
              <ConferenceDetails event={"8LU Meetup"} date={"February 2017"} location={"London, UK"}/>
              <br/>
              <div>
                One day workshop taking students through different refactoring techniques on a legacy code base.
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>

      <StyledCardContainer>
        <StyledLink href={"https://www.meetup.com/london-software-craftsmanship/events/235776594"}
                    target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <StyledImage imageUrl={"createYourOwnTestFramework.jpeg"}/>
            </CardHeader>
            <CardContent>
              <TitleLayout> Create Your Own Test Framework </TitleLayout>
              <ConferenceDetails event={"London Software Craftsmanship Meetup"} date={"December 2016"}
                                 location={"London, UK"}/>
              <br/>
              <div>
                Practical workshop where students explored the fundamentals of a test framework by extracting their own
                from the code they were writing.
              </div>
              <br/>
            </CardContent>
          </CardBase>
        </StyledLink>
      </StyledCardContainer>
    </StyledDiv>
  </Container>
);
