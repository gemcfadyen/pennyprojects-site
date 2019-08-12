import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
    paddingTop: 8;
    paddingBottom: 8;
    paddingLeft: 12;
    paddingRight: 12;
`;

const CardContent = ({children}) => (
  <StyledContent> {children} </StyledContent>
);

export default CardContent;
