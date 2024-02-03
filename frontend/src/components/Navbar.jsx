import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <NAVWRAPPER>
      <h1>Library App</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </NAVWRAPPER>
  );
};
const NAVWRAPPER = styled.div`
  display: flex;
  gap: 25px;
  background-color: gray;
  align-items: center;
`;
