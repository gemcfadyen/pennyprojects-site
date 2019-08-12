import React, {Component} from 'react';
import CardBase from "./base/base";
import CardHeader from "./header/header";
import CardContent from "./content/content";

import styled from "styled-components";
import Link from "gatsby-link";

const StyledDiv = styled.div`
display:flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: space-between;
margin: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledCardContainer = styled.div`
width: 300px;
`;


class Cards extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledLink to={"/blog"} title={"blog"}>
          <StyledCardContainer>
            <CardBase interactive={true}>
              <CardHeader>
                <div>Blogs</div>
              </CardHeader>
              <CardContent>
                todo
              </CardContent>
            </CardBase>
          </StyledCardContainer>
        </StyledLink>

        <StyledLink to={"/talks"} title={"talks"}>
          <StyledCardContainer>
            <CardBase interactive={true}>
              <CardHeader>
                Talks
              </CardHeader>
              <CardContent>
                todo
              </CardContent>
            </CardBase>
          </StyledCardContainer>
        </StyledLink>

        <StyledLink to={"/workshops"} title={"workshops"}>

          <StyledCardContainer>
            <CardBase interactive={true}>
              <CardHeader>
                <div>Workshops</div>
              </CardHeader>
              <CardContent>
                todo
              </CardContent>
            </CardBase>
          </StyledCardContainer>
        </StyledLink>


        <StyledLink to={"/training"} title={"training"}>
          <StyledCardContainer>
            <CardBase interactive={true}>
              <CardHeader>
                <div>Training</div>
              </CardHeader>
              <CardContent>
                todo
              </CardContent>
            </CardBase>
          </StyledCardContainer>
        </StyledLink>
      </StyledDiv>
    );
  }
}

export default Cards;