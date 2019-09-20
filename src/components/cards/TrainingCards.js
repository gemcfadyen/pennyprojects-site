import React from "react";
import Container from "../container";
import styled from "styled-components";
import CardBase from "../cards/base/base";
import CardHeader from "../cards/header/header";
import CardContent from "../cards/content/content";
import StyledImage from "../cards/HeaderImage";
import ConferenceDetails from "./content/conferenceDate";
import TitleLayout from "./content/TitleLayout";
import StyledCardContainer from "./StyledContainer";

const StyledDiv = styled.div`
@media screen and (min-width: 40em) {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   }
`;

export default () => (
  <Container>
    <StyledDiv>
      <StyledCardContainer>
        <CardBase interactive={false}>
          <CardHeader>
            <StyledImage imageUrl={"training/java.jpg"}/>
          </CardHeader>
          <CardContent>
            <TitleLayout>Java 8 Training</TitleLayout>
            <br/>
            <ConferenceDetails date={"August 2016"} event={"Client Training"} location={"Northampton, UK"}/>
            <br/>
            <div>
              3 day in house training course teaching students how to use Java 8 features, SOLID principles and TDD.
            </div>
            <br/>
          </CardContent>
        </CardBase>
      </StyledCardContainer>

      <StyledCardContainer>
        <CardBase interactive={false}>
          <CardHeader>
            <StyledImage imageUrl={"training/elixir.jpg"}/>
          </CardHeader>
          <CardContent>
            <TitleLayout>Elixir for Beginners</TitleLayout>
            <br/>
            <ConferenceDetails date={"May 2016"} event={"Client Training"} location={"London, UK"}/>
          <br/>
            <div>
              3 day in house training course introducing students to the key feature of Elixir and functional
              programming using TDD.
            </div>
            <br/>
          </CardContent>
        </CardBase>
      </StyledCardContainer>

      <StyledCardContainer>
        <CardBase interactive={false}>
          <CardHeader>
            <StyledImage imageUrl={"training/agile.jpg"}/>
          </CardHeader>
          <CardContent>
            <TitleLayout> Skills for the Agile Developer</TitleLayout>
            <div>
              <ConferenceDetails date={"May 2015"} event={"Client Training"} location={"London, UK"}/>
              <br/>

              <ConferenceDetails date={"June 2015"} event={"Client Training"} location={"New York, USA"}/>
              <br/>

              <ConferenceDetails date={"June 2015"} event={"Client Training"} location={"Nashville, USA"}/>
              <br/>
              2 day in house training course introducing developers to Agile programming techniques such as pair
              programming, TDD, continuous delivery, & SOLID design principles.
            </div>
            <br/>
          </CardContent>
        </CardBase>
      </StyledCardContainer>
    </StyledDiv>
  </Container>
);
