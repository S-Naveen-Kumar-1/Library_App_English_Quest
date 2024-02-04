import React from "react";

export const Book = ({ title, author, price, category }) => {
  return (
    <>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{price}</td>
    </>
  );
};
