import React from "react";
import styled from "styled-components";

export const Book = ({ title, author, price, createdAt }) => {
  return (
    <>
      <Td>{title}</Td>
      <Td>{author}</Td>
      <Td>{new Date(createdAt).toLocaleTimeString()}</Td>
      <Td>{price}</Td>
    </>
  );
};
const Td = styled.td`
  padding: 10px;
  text-align: center;
  background-color: #c0c2ba;
`;
