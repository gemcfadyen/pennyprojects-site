import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const StyledFooterDiv= styled.div`
   margin: "1rem auto";
   maxWidth: 800
`;

const ListWithoutBullet = styled.ul`
   list-style-type: none;
`;

const SizedImage = styled.img`
  height: 80%;
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

export default ({ children }) => (
  <Wrapper>
    <StyledFooterDiv>
      <ListWithoutBullet>
        <StyledListItem>
          <PaddedLink href="https://www.github.com/gemcfadyen">
            <SizedImage src="github.png" alt="github logo"/>
          </PaddedLink>

          <PaddedLink href="https://www.twitter.com/gemcfadyen">

            <SizedImage src="twitter.png" alt="twitterlogo"/>
          </PaddedLink>

          <PaddedLink href="https://uk.linkedin.com/in/georgina-mcfadyen-03942b104">
            <SizedImage src="linkedin.png" alt="linkedin logo"/>
          </PaddedLink>
        </StyledListItem>
      </ListWithoutBullet>
    </StyledFooterDiv>
  </Wrapper>
);
