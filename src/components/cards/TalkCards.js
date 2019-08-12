import React, {Component} from 'react';
import CardBase from "./base/base";
import CardHeader from "./header/header";
import CardContent from "./content/content";

import styled from "styled-components";
//todo decide if we want these to be linear or wrapped
const StyledDiv = styled.div`
//display:flex;
//flex-direction: column;
//align-items: center;
//justify-content: space-between;
//margin: auto;

@media screen and (min-width: 40em) {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   }
`;

const StyledCardContainer = styled.div`
//max-width: 500px;

@media screen and (min-width: 40em) {
   flex: 0 1 calc(50% - 1em);
   min-width: 290px;
   padding-bottom: 1em;
   }
   
   @media screen and (min-width: 60em) {
     flex: 0 1 calc(25% - 1em);
}
`;

const StyledLink = styled.a`
text-decoration: none;
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
  scrolling: "no";
`;

const MultiVideoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 600px;
`;

const BoldText = styled.h1`
  font-weight: bold;
  font-size: 15px;
`;

class TalkCards extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledCardContainer>
          <CardBase interactive={false}>
            <CardHeader>
              SOLID Elixir
            </CardHeader>
            <CardContent>
              <div>
                Ever wondered how the OO SOLid principles could relate to functional languages?
                This talk did a Europe tour in 2018 and featured as the closing KeyNote at Code Lite Beam, Milan.

                TODO Put a web page imbedded to the Closing key note at code lite beam
              </div>
              <br/>
              <MultiVideoContainer>
                <div> Elixir EU, Warsaw 2018</div>
                <VideoWrapper>
                  <VideoIFrame
                    src="https://www.youtube.com/embed/eldYot7uxUc">
                  </VideoIFrame>
                </VideoWrapper>

                <div> GoTo Cophenhagen 2018</div>
                <VideoWrapper>
                  <VideoIFrame
                    src="https://www.youtube.com/embed/rmftOs2BzgU">
                  </VideoIFrame>
                </VideoWrapper>
              </MultiVideoContainer>

            </CardContent>
          </CardBase>
        </StyledCardContainer>

        <StyledCardContainer>
          <CardBase interactive={false}>
            <CardHeader>
              Elixir: A Mini Documentary, Elixir EU
              Warsaw, April 2018
            </CardHeader>
            <CardContent>
              <VideoWrapper>
                <VideoIFrame width="210" height="182"
                             src="https://www.youtube.com/embed/lxYFOM3UJzo">
                </VideoIFrame>
              </VideoWrapper>
            </CardContent>
          </CardBase>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledLink href={"http://swanseacon.co.uk/archive2017/"}
                      target="_blank">
          <CardBase interactive={false}>
            <CardHeader>
              Don't Diss The Discipline
              SwanseaCon
              Wales, September 2017
            </CardHeader>
            <CardContent>
              TODO Summary of Talk
              <ExternalLink href="http://swanseacon.co.uk/archive2017/" width="210" height="182">
                Click here to view the event
              </ExternalLink>

            </CardContent>
          </CardBase>
          </StyledLink>
        </StyledCardContainer>


        <StyledCardContainer>
          <CardBase interactive={false}>
            <CardHeader>
              Under The Elixir Umbrella
              Elixir London Conference
              London, August 2017
            </CardHeader>
            <CardContent>

              This talk took place as part of the Elixir LDN conference in August 2017.

              <VideoWrapper>
                <VideoIFrame width="210" height="182"
                             src="https://www.youtube.com/embed/jhZwQ1LTdUI">
                </VideoIFrame>
              </VideoWrapper>
            </CardContent>
          </CardBase>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledLink href={"https://www.meetup.com/Ladies-of-Code-UK/events/236922126/"}
                      target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText>Introduction to Elixir</BoldText>
              Ladies of Code Meetup
              London, April 2017
            </CardHeader>
            <CardContent>

              This introduction to Elixir Umbrellas was given at the Ladies of Code meetup in London, April 2017.
              /** todo need to put in a web frame to show website **/
              <ExternalLink href="https://www.meetup.com/Ladies-of-Code-UK/events/236922126/" width="210" height="182">
                Click here to view the event
              </ExternalLink>
            </CardContent>
          </CardBase>
          </StyledLink>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledLink href={"https://www.meetup.com/Ladies-of-Code-UK/events/232609419/"}
                      target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> TDD From the inside out or the outside in</BoldText>
              Ladies of Code Meetup
              London, August 2016
            </CardHeader>
            <CardContent>

              This talk discussed two approches of TDD. It was given as part of the Ladies of Code meetup group in
              London, August 2016.
              /** todo need to put in a web frame to show website **/
              <ExternalLink href="https://www.meetup.com/Ladies-of-Code-UK/events/232609419/" width="210" height="182">
                Click here to view the event
              </ExternalLink>
            </CardContent>
          </CardBase>
          </StyledLink>
        </StyledCardContainer>


        <StyledCardContainer>
          <StyledLink href={"https://getstarted.ticketmaster.co.uk/news/london-technology-week-wrap"}
                      target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText> Diversity in Technology</BoldText>
              London Technology Week
              London, July 2016
            </CardHeader>
            <CardContent>

              As part of London Technology week, a presentation was given on the current diversity issues that the
              software industry faces, July 2016.
              /** todo need to put in a web frame to show website **/
              <ExternalLink href="https://getstarted.ticketmaster.co.uk/news/london-technology-week-wrap" width="210"
                            height="182">
                Click here to read about it
              </ExternalLink>
            </CardContent>
          </CardBase>
          </StyledLink>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledLink href={"https://getstarted.ticketmaster.co.uk/news/london-technology-week-wrap"}
                      target="_blank">
          <CardBase interactive={true}>
            <CardHeader>
              <BoldText>Introduction to Elixir</BoldText>
              Ladies of Code Meetup
              London, April 2016
            </CardHeader>
            <CardContent>

              As part of London Technology week, a presentation was given on the current diversity issues that the
              software industry faces, July 2016.
              /** todo need to put in a web frame to show website **/
              <ExternalLink href="https://www.meetup.com/Ladies-of-Code-UK/events/236922126/" width="210" height="182">
                Click here to view the event
              </ExternalLink>
            </CardContent>
          </CardBase>
          </StyledLink>
        </StyledCardContainer>
      </StyledDiv>
    );
  }
}

export default TalkCards;