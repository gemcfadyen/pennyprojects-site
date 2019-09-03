import styled from "styled-components";
import React from "react";

const StyledContainer = styled.div`
padding-bottom: 1rem;
@media screen and (min-width: 40em) {
   flex: 0 1 calc(50% - 1em);
   min-width: 290px;
   padding-bottom: 1em;
   }
   
   @media screen and (min-width: 60em) {
     flex: 0 1 calc(25% - 1em);
}
`;

const StyledCardContainer = ({children}) =>
  (<StyledContainer> {children} </StyledContainer>);


export default StyledCardContainer;
