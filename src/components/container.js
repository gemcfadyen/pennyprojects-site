import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  color: blue;
  margin: 3rem auto;
  maxWidth: 600;
`;

export default ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);
