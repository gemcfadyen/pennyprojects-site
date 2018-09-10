import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  color: black;
  margin: 3rem auto;
`;

export default ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);
