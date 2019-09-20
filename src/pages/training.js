import React from "react";
import Container from "../components/container";
import WorkshopCards from "../components/cards/WorkshopCards";
import TrainingCards from "../components/cards/TrainingCards";
import TitleLayout from "../components/cards/content/TitleLayout";

export default () => (
  <Container>
    <TitleLayout>Workshops </TitleLayout>
    <WorkshopCards/>

    <TitleLayout>Training</TitleLayout>
    <TrainingCards/>
  </Container>
);
