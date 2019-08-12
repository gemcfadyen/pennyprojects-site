import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
    //width: 100%;
    maxWidth: 800;
`;

const CardWrapper = (props) => (
  <StyledContainer>
      {props.children}
  </StyledContainer>
);

export default CardWrapper;