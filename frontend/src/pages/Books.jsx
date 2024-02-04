// Books.js
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBook,
  getBooks,
  getNewBooks,
  getOldBooks,
} from "../redux/book/action";
import { Book } from "../components/Book";
import styled from "styled-components";

export const Books = () => {
  const dispatch = useDispatch();
  const { token, role } = useSelector((store) => store.authReducer);
  const { books } = useSelector((store) => store.bookReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleEdit = (bookId) => {
    console.log("Edit book with id:", bookId);
  };

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };
  const handleChange = (e) => {
    if (e.target.value === "old") {
      dispatch(getOldBooks());
    } else if (e.target.value === "new") {
      dispatch(getNewBooks());
    } else {
      dispatch(getBooks());
    }
  };

  return (
    <div>
      <div>
        <select name="" id="">
          <option value="">Filter By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <select name="" id="" onChange={handleChange}>
          <option value="">Filter By Created Date</option>
          <option value="old">Created Later Than 10</option>
          <option value="new">New</option>
        </select>
      </div>
      {/* table starts */}
      <div>
        <Table>
          <thead>
            <tr>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Category</Th>
              <Th>Price</Th>
            </tr>
          </thead>
          <tbody>
            {books?.length > 0 &&
              books.map((book) => (
                <tr key={book._id}>
                  <Book {...book} />
                  {role === "creator" && (
                    <EditDeleteTd>
                      <EditDeleteButton onClick={() => handleEdit(book._id)}>
                        Edit
                      </EditDeleteButton>
                      <EditDeleteButton onClick={() => handleDelete(book._id)}>
                        Delete
                      </EditDeleteButton>
                    </EditDeleteTd>
                  )}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {/* table ends */}
    </div>
  );
};
const Table = styled.table`
  width: 80%;
  margin-top: 20px;
  text-align: center;
  margin: auto;
`;

const Th = styled.th`
  background-color: #b5b0b0;
  padding: 10px;
  text-align: center;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const EditDeleteTd = styled(Td)`
  display: flex;
  gap: 10px;
`;

const EditDeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;
