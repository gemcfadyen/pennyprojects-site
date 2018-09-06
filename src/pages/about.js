import React from "react";
import Container from "../components/container";
import styled from "styled-components";

const CircularImage = styled.img`
   border-radius: 50%;
   vertical-align: middle;
   width: 150px;
   height: 150px;
   margin-right: 10px;
   float: left;
`;

const MainTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 15px;
  padding-right: 5px;
  display: inline;
`;

export default () => (
  <Container>
    <CircularImage src="headshot.jpeg" alt="" />

    <p>I'm Georgina, a Contract Polyglot Developer. I enjoy working on high performing, collaborative Agile teams where challenges are embraced, modern technologies applied, and software delivered using clean coding techniques and best practices.</p>
    <MainTitle>Summary of Technologies: </MainTitle> Polyglot Full Stack Developer: Java, JavaScript, React, Ruby, Elixir, PHP, C++, SQL, Gigaspaces, Spring Batch Framework, Spring, Hibernate, Xslt, Maven, Gradle, Git.

  <p/>

  <MainTitle>Summary of Methodologies: </MainTitle> Scrum, Kanban, Test Driven Development, Behaviour Driven Development, Specification by Example, Pair-programming.
</Container>
);
