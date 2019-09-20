import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    margin-bottom: 16px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

const CardHeader = ({children}) => (
  <StyledHeader> {children} </StyledHeader>
)
;

export default CardHeader;