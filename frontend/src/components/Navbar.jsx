import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const [isAuth, setIsAuth] = useState(true);

  const handleLogout = () => {
    setIsAuth(false);
  };
  return (
    <NAVWRAPPER>
      <h1>Library App</h1>
      <Link to={"/book"}>Books</Link>
      {isAuth ? (
        <Link onClick={handleLogout} to={"/login"}>
          Logout
        </Link>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      )}
    </NAVWRAPPER>
  );
};
const NAVWRAPPER = styled.div`
  display: flex;
  gap: 25px;
  background-color: gray;
  align-items: center;
`;
