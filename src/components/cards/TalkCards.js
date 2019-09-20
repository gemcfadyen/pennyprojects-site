import React, {Component} from 'react';
import CardBase from "./base/base";
import CardHeader from "./header/header";
import CardContent from "./content/content";

import styled from "styled-components";
import StyledImage from "./HeaderImage";
import TitleLayout from "./content/TitleLayout";
import ConferenceDetails from "./content/conferenceDate";
import StyledCardContainer from "./StyledContainer";

const StyledDiv = styled.div`
@media screen and (min-width: 40em) {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   }
`;

const StyledLink = styled.a`
text-decoration: none;
color: black;

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

class TalkCards extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledCardContainer>
          <CardBase interactive={false}>
            <CardHeader>
              <StyledImage imageUrl={"gotoCpnSmall.jpg"}/>
            </CardHeader>
            <br/>
            <CardContent>
              <TitleLayout> SOLID Elixir </TitleLayout>
              <ConferenceDetails event={"GoTo CPH"} date={"October 2018"} location={"Copenhagen"}/>
              <VideoWrapper>
                <VideoIFrame
                  src="https://www.youtube.com/embed/rmftOs2BzgU">
                </VideoIFrame>
              </VideoWrapper>
              <br/>
              <ConferenceDetails event={"Elixir EU"} date={"April 2018"} location={"Warsaw, Poland"}/>
              <VideoWrapper>
                <VideoIFrame
                  src="https://www.youtube.com/embed/eldYot7uxUc">
                </VideoIFrame>
              </VideoWrapper>
              <br/>
              <ConferenceDetails event={"Closing key note at Code Beam Lite"} date={"April 2018"}
                                 location={"Milan, Italy"}/>

              <br/>
            </CardContent>
          </CardBase>
        </StyledCardContainer>

        < StyledCardContainer>
          <CardBase interactive={false}>
            <CardHeader>
              <StyledImage imageUrl={"cards.jpeg"}/>
            </CardHeader>
            <CardContent>
              <TitleLayout>
                Elixir: A Mini Documentary
              </TitleLayout>
              <ConferenceDetails event={"Elixir EU"} date={"April 2018"} location={"Warsaw, Poland"}/>

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
            <CardBase interactive={true}>
              <CardHeader>
                <StyledImage imageUrl={"swansea.jpeg"}/>
              </CardHeader>
              <CardContent>

                <TitleLayout> Don't Diss The Discipline</TitleLayout>
                <ConferenceDetails event={"SwanseaCon"} date={"September 2017"} location={"Swansea, Wales"}/>
                <br/>
                <div>
                  This talk drew upon experiences seen during my journey to becoming a Software Crafter,
                  I summarised some common traits observed in those developers who made a huge impact on my career,
                  and how I built up my own offering such that I now call myself a Software Crafter.
                </div>
              </CardContent>
            </CardBase>
          </StyledLink>
        </StyledCardContainer>

        <StyledCardContainer>
          <CardBase interactive={false}>
            <CardHeader>
              <StyledImage imageUrl={"ElixirLdnUmbrellaTalk.jpeg"}/>
            </CardHeader>
            <CardContent>
              <TitleLayout>Under The Elixir Umbrella </TitleLayout>
              <ConferenceDetails event={"Elixir Ldn"} date={"August 2017"} location={"London, UK"}/>
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
                <StyledImage imageUrl={"LoCUmbrella.jpeg"}/>
              </CardHeader>
              <CardContent>
                <TitleLayout>Introduction to Elixir </TitleLayout>
                <ConferenceDetails event={"Ladies of Code Meetup"} date={"April 2017"} location={"London, UK"}/>
                <br/>
                <div>
                  This talk went through basic examples and live code demos of some Elixir features.
                </div>
              </CardContent>
            </CardBase>
          </StyledLink>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledLink href={"https://www.meetup.com/Ladies-of-Code-UK/events/232609419/"}
                      target="_blank">
            <CardBase interactive={true}>
              <CardHeader>
                <StyledImage imageUrl={"TDD2Talk.jpeg"}/>
              </CardHeader>
              <CardContent>
                <TitleLayout>TDD From the Inside Out or the Outside In? </TitleLayout>
                <ConferenceDetails event={"Ladies of Code Meetup"} date={"August 2016"} location={"London, UK"}/>

                <br/>
                <div>
                  This talk compared two different styles of TDD: inside out and outside in.
                </div>
              </CardContent>
            </CardBase>
          </StyledLink>
        </StyledCardContainer>

        <StyledCardContainer>
          <StyledLink href={"https://getstarted.ticketmaster.co.uk/news/london-technology-week-wrap"}
                      target="_blank">
            <CardBase interactive={true}>
              <CardHeader>
                <StyledImage imageUrl={"DiversityTalk.jpeg"}/>
              </CardHeader>
              <CardContent>
                <TitleLayout>Diversity in Technology</TitleLayout>
                <ConferenceDetails event={"London Technology Week"} date={"July 2016"} location={"London, UK"} />
                <br/>
                <div>
                  This talk shared 8th Light’s journey to creating a gender diverse workplace.
                </div>
              </CardContent>
            </CardBase>
          </StyledLink>
        </StyledCardContainer>
      </StyledDiv>
    );
  }
}

export default TalkCards;