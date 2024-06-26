import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style-type: none;
  }
  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
`;

export default Nav;
