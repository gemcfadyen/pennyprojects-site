import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
                background-image: url(${props => props.imageUrl});
                background-size: cover;
                background-position: center center;
                width: 100%;
                height: 180px;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
`;

const HeaderImage = ({imageUrl, children}) =>
  (<StyledImage imageUrl={imageUrl}> {children} </StyledImage>);

export default HeaderImage;