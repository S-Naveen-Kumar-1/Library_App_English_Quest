import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/action";

export const Login = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    const { value } = e.target;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" id="" onChange={handleLogin} />
        <input type="text" name="password" id="" onChange={handleLogin} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
