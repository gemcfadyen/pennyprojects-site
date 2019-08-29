import React from "react";
import Container from "../container";
import styled from "styled-components";
import CardBase from "../cards/base/base";
import CardHeader from "../cards/header/header";
import CardContent from "../cards/content/content";
import StyledImage from "../cards/HeaderImage";

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

export default () => (
  <Container>

    <StyledDiv>
      <StyledCardContainer>
        <CardBase interactive={false}>
          <CardHeader>
            <BoldText> Java 8 </BoldText>
            Northampton, May 2016
          </CardHeader>
          <CardContent>
            <div>
              3 day training course...
            </div>
            <br/>


          </CardContent>
        </CardBase>
      </StyledCardContainer>


      <StyledCardContainer>
        <CardBase interactive={false}>
          <CardHeader>
            <BoldText> Beginner Elixir </BoldText>
            London, May 2016
          </CardHeader>
          <CardContent>
            <div>
              3 day training course...
            </div>
            <br/>


          </CardContent>
        </CardBase>
      </StyledCardContainer>

      <StyledCardContainer>
        <CardBase interactive={false}>
          <CardHeader>
            <StyledImage imageUrl={"training/AgileTraining.jpeg"}/>
          </CardHeader>
          <CardContent>
            <div>
              3 day training course...
              <BoldText> Skills for the Agile Developer</BoldText>
              London,
              New York, USA
              Nashville, USA
            </div>
            <br/>
          </CardContent>
        </CardBase>
      </StyledCardContainer>

    </StyledDiv>
  </Container>
);
