// Books.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBook,
  getBooks,
  getNewBooks,
  getOldBooks,
} from "../redux/book/action";
import { Book } from "../components/Book";
import styled from "styled-components";
import { AddBook } from "../components/AddBook";
import { Edit } from "../components/Edit";

export const Books = () => {
  const dispatch = useDispatch();
  const { token, role } = useSelector((store) => store.authReducer);
  const { books } = useSelector((store) => store.bookReducer);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const configObj = {
      params: {
        sort: "price",
        order: sort,
      },
    };
    dispatch(getBooks(configObj));
  }, [sort]);

  const config = {};

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
    <MAIN>
      <FILTERDIV1>
        <SELECT name="" id="" onChange={handleChange}>
          <OPTION value="">Filter By Created Date</OPTION>
          <OPTION value="old">Books Created Earlier</OPTION>
          <OPTION value="new">Recent Books</OPTION>
        </SELECT>
      </FILTERDIV1>

      {/* table starts */}
      <TABLEDIV>
        <Table>
          <thead>
            <tr>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Created At</Th>
              <Th>Price</Th>
              {role === "creator" && <Th>Action</Th>}
            </tr>
          </thead>
          <tbody>
            {books?.length > 0 &&
              books.map((book) => (
                <tr key={book._id}>
                  <Book {...book} />
                  {role === "creator" && (
                    <EditDeleteTd>
                      <Edit id={book._id} />
                      <EditDeleteButton onClick={() => handleDelete(book._id)}>
                        Delete
                      </EditDeleteButton>
                    </EditDeleteTd>
                  )}
                </tr>
              ))}
          </tbody>
        </Table>
      </TABLEDIV>
      {/* table ends */}
      <FILTERDIV>
        <SELECT name="" id="" onChange={(e) => setSort(e.target.value)}>
          <OPTION value="">Filter By Price</OPTION>
          <OPTION value="asc">Low to High</OPTION>
          <OPTION value="desc">High to Low</OPTION>
        </SELECT>
      </FILTERDIV>
    </MAIN>
  );
};
const MAIN = styled.div`
  display: flex;
`;
const TABLEDIV = styled.div`
  width: 80%;
  margin-left: 6%;
  margin-top: 6%;
  border-radius: 5px;
`;
const FILTERDIV = styled.div`
  width: 15%;
  margin: 10px;
  margin-left: -10%;
  margin-right: 10%;
`;
const FILTERDIV1 = styled.div`
  width: 15%;
  margin: 10px;
`;
const Table = styled.table`
  width: 100%;
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
  background-color: #c0c2ba;
`;

const EditDeleteTd = styled(Td)`
  display: flex;
  gap: 10px;
  margin: auto;
  justify-content: center;
`;

const EditDeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #fa7373;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const SELECT = styled.select`
  width: 120%;
  padding: 12px;
  margin: auto;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid black;
`;
const OPTION = styled.option`
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  font-size: medium;
  font-weight: bold;
`;
