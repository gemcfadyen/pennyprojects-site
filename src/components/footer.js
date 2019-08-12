import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 4em;
    //background-color: lightcyan;
`;

const StyledFooterDiv= styled.div`
   margin: "1rem auto";
   maxWidth: 800px;
`;

const ListWithoutBullet = styled.ul`
   list-style-type: none;
`;

const SizedImage = styled.img`
  height: 100%;
  width: 40%;
`;

const PaddedLink = styled.a`
  padding-right: 5px;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Wrapper>
    <StyledFooterDiv>
      <ListWithoutBullet>
        <StyledListItem>
          <PaddedLink href="https://www.github.com/gemcfadyen">
            <SizedImage src="https://pennyprojects.co.uk/github.jpeg" alt="github logo"/>
          </PaddedLink>

          <PaddedLink href="https://www.twitter.com/gemcfadyen">

            <SizedImage src="https://pennyprojects.co.uk/twitter.jpeg" alt="twitterlogo"/>
          </PaddedLink>

          <PaddedLink href="https://www.linkedin.com/in/georgina-m-03942b104">
            <SizedImage src="https://pennyprojects.co.uk/linkedin.jpeg" alt="linkedin logo"/>
          </PaddedLink>
        </StyledListItem>
      </ListWithoutBullet>
    </StyledFooterDiv>
  </Wrapper>
);
