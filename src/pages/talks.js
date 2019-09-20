import React from "react";
import Container from "../components/container";
import TalkCards from "../components/cards/TalkCards";
import TitleLayout from "../components/cards/content/TitleLayout";

export default () => (
  <Container>
    <TitleLayout>
      Over the last few years I have made several public appearances in the form of talks and workshops. Here are
      details on talks I've done in the Software Community all over Europe.
    </TitleLayout>
    <p/>
    <TalkCards/>

  </Container>
);
