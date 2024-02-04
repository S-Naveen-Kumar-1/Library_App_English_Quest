import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/auth/action";
import { AddBook } from "./AddBook";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAUTH);
  const { token, role } = useSelector((store) => store.authReducer);
  useEffect(() => {}, [isAuth]);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavWrapper>
      <H1>Library App</H1>
      <NavLinks>
        {role === "creator" && <AddBook />}

        <NavLink to={"/"}>Books</NavLink>
        {isAuth ? (
          <LogoutLink onClick={handleLogout}>Logout</LogoutLink>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </>
        )}
      </NavLinks>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  padding: 15px;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #ecf0f1;
  margin-left: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 50px;
  margin-right: 50px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ecf0f1;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutLink = styled.span`
  cursor: pointer;
  color: #ecf0f1;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
