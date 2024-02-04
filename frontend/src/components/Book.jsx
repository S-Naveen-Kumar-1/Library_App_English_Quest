import React from "react";

export const Book = ({ title, author, price, createdAt }) => {
  return (
    <>
      <td>{title}</td>
      <td>{author}</td>
      <td>
        {
          (new Date(createdAt).toLocaleDateString(),
          new Date(createdAt).toLocaleTimeString())
        }
      </td>
      <td>{price}</td>
    </>
  );
};
