import React from "react";
import Link from "gatsby-link";
import Container from "../components/container";
import styled from "styled-components";

const StyledGrid = styled.ul`
   list-style-type: none;
   display: flex;
   flex-flow: wrap;
   justify-content: space-around;
`;

const StyledTalk = styled.li`
  flex: 50%;
  padding: 5px;
  margin-top: 10px;
`;

const ExternalLink = styled.a`
  padding-right: 5px;
  text-decoration: none;
  display: block;
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
`;

const VideoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BoldText = styled.h1`
  font-weight: bold;
  font-size: 15px;
`;

const NormalText = styled.text`
  font-size: 15px;
`;

export default () => (
  <Container>
    Over the last few years I have made several public apperances in the form of talks and workshops. Here are details on sessions I've held in the Software Community all over Europe:

    <p/>
    <StyledGrid>

      <StyledTalk>
        <BoldText> SOLID Elixir </BoldText>
        <NormalText>This talk was presented in Warsaw, Poland in April 2018 as part of the Elixir EU conference.
        </NormalText>
      </StyledTalk>
      <StyledTalk>
        <VideoWrapper>
          <VideoIFrame
            src="https://www.youtube.com/embed/eldYot7uxUc">
          </VideoIFrame>
        </VideoWrapper>
      </StyledTalk>

      <StyledTalk>
        <VideoWrapper>
          <VideoIFrame
            src="http://doc.honeypot.io/elixir-documentary-2018/">
          </VideoIFrame>
        </VideoWrapper>
      </StyledTalk>
      <StyledTalk>
        <BoldText> Elixir: A Mini Documentary </BoldText>
        <NormalText>
          This documentary uses footage from the 2018 Elixir EU Conference held in Warsaw where I was interviewed and feature around 9 minutes in.
        </NormalText>
      </StyledTalk>

      <StyledTalk>
        <BoldText> SOLID Elixir Keynote </BoldText>
        <NormalText>
          This talk was presented as the closing keynote speaker in  Milan, Italy in April 2018 as part of the CodeBeam Lite conference.
        </NormalText>
      </StyledTalk>
      <StyledTalk>
        <VideoWrapper>
          <VideoIFrame
            src="https://codesync.global/speaker/georgina-mcfadyen">
          </VideoIFrame>
        </VideoWrapper>
      </StyledTalk>

      <StyledTalk>
        <ExternalLink href="http://swanseacon.co.uk/archive2017/" width="210" height="182">
          Click here to view the event
        </ExternalLink>
      </StyledTalk>
      <StyledTalk>
        <BoldText> Don't Diss The Discipline </BoldText>
        <NormalText>
          This talk was given in Swansea, Wales as part of SwanseaCon.
        </NormalText>
      </StyledTalk>

      <StyledTalk>
        <BoldText> Under The Elixir Umbrella </BoldText>
        <NormalText>
          This talk took place as part of the Elixir LDN conference in August 2017.
        </NormalText>
      </StyledTalk>
      <StyledTalk>
        <VideoWrapper>
          <VideoIFrame
            src="https://www.youtube.com/embed/jhZwQ1LTdUI">
          </VideoIFrame>
        </VideoWrapper>
      </StyledTalk>

      <StyledTalk>
        <VideoWrapper>
          <VideoIFrame
            src="http://www.elixirconf.eu/elixirconf2017/georgina-mcfadyen">
          </VideoIFrame>
        </VideoWrapper>
      </StyledTalk>
      <StyledTalk>
        <BoldText> Microservices Under the Umbrella </BoldText>
        <NormalText>
          This workshop was held in Barcelona, Spain as part of Elixir EU in May 2017.
        </NormalText>
      </StyledTalk>

      <StyledTalk>
        <BoldText>Introduction to Elixir</BoldText>
        <NormalText>
          This introduction to Elixir Umbrellas was given at the Ladies of Code meetup in London, April 2017.
        </NormalText>
      </StyledTalk>
      <StyledTalk>
        <ExternalLink href="https://www.meetup.com/Ladies-of-Code-UK/events/236922126/" width="210" height="182">
          Click here to view the event
        </ExternalLink>
      </StyledTalk>

      <StyledTalk>
        <ExternalLink href="https://www.meetup.com/8LU-London/events/237311782/" width="210" height="182">
          Click here to view the event
        </ExternalLink>
      </StyledTalk>
      <StyledTalk>
        <BoldText> 8LU Legacy Code Retreat </BoldText>
        <NormalText>
        This workshop was given in February 2017 as part of 8th Light University in London.
      </NormalText>
      </StyledTalk>

      <StyledTalk>
        <BoldText> Extract Your Own Test Framework </BoldText>
        <NormalText>
          This workshop was given in December 2016 at London Software Craftsmanship Community.
        </NormalText>
      </StyledTalk>
      <StyledTalk>
        <ExternalLink href="hhttps://www.meetup.com/london-software-craftsmanship/events/235776594" width="210" height="182">
          Click here to view the event
        </ExternalLink>
      </StyledTalk>

      <StyledTalk>
        <ExternalLink href="https://www.meetup.com/Ladies-of-Code-UK/events/232609419/" width="210" height="182">
          Click here to view the event
        </ExternalLink>
      </StyledTalk>
      <StyledTalk>
        <BoldText> TDD From the inside out or the outside in</BoldText>
        <NormalText>
          This talk discussed two approches of TDD. It was given as part of the Ladies of Code meetup group in London, August 2016.
        </NormalText>
      </StyledTalk>

      <StyledTalk>
        <BoldText> London Techonology Week: Diversity in Technology</BoldText>
        <NormalText>
          As part of London Technology week, a presentation was given on the current diversity issues that the software industry faces, July 2016.
        </NormalText>
      </StyledTalk>

      <StyledTalk>
        <ExternalLink href="https://getstarted.ticketmaster.co.uk/news/london-technology-week-wrap" width="210" height="182">
          Click here to read about it
        </ExternalLink>
      </StyledTalk>
    </StyledGrid>
  </Container>
);
