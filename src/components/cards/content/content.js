import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
    padding: 8px 12px;
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    ;
`;

const CardContent = ({children}) => (
  <StyledContent> {children} </StyledContent>
);

export default CardContent;
