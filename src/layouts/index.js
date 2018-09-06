import React from "react";
import Link from "gatsby-link";
import Footer from "../components/footer";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

  export default ({ children }) =>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Penny Projects Ltd</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/talks">Talks</ListLink>
        </ul>
      </header>
      {children()}
      <Footer/>
    </div>
