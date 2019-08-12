import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    borderTopLeftRadius: 12;
    borderTopRightRadius: 12;
    overflow: hidden;
`;

const CardHeader = ({children}) => (
  <StyledHeader> {children} </StyledHeader>
)
;

export default CardHeader;