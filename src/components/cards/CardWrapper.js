import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
    maxWidth: 800;
`;

const CardWrapper = (props) => (
  <StyledContainer>
      {props.children}
  </StyledContainer>
);

export default CardWrapper;