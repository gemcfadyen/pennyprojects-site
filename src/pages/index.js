import React from "react"
import Link from "gatsby-link";
import Container from "../components/container";
import styled from "styled-components";

const CircularImage = styled.img`
   border-radius: 50%;
   vertical-align: middle;
   width: 100px;
   height: 100px;
   margin-right: 10px;
   float: left;
`;

export default () =>
  <Container>
    <CircularImage src="headshot.jpeg" alt="" />

   Welcome to Penny Projects Ltd - A company which can provide you with contract software development services.

    <blockquote>
      <p>
        There is indeed an element of luck, and no, there isn’t. The prepared
        mind sooner or later finds something important and does it. So yes, it
        is luck.{" "}
        <em>
          The particular thing you do is luck, but that you do something is
          not.
        </em>
      </p>
    </blockquote>
    </Container>
