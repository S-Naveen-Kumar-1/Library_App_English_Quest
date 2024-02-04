import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { isAuth, isLoading } = useSelector((store) => {
    console.log(store.authReducer);
    return store.authReducer;
  });
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) {
      toast.info("Please wait...", { autoClose: false, closeOnClick: false });
    } else {
      toast.dismiss();
    }
    console.log(userData);
    dispatch(login(userData)).then((res) => {
      navigate("/");
    });
  };
  return (
    <LoginWrapper>
      <div>
        <H1>Welcome Back!</H1>
        <IMG src="login_page_img.png" alt="" />
      </div>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Group>
            <Label>Email</Label>
            <Input type="email" name="email" onChange={handleLogin} />
          </Group>
          <Group>
            <Label>Password</Label>
            <Input type="password" name="password" onChange={handleLogin} />
          </Group>

          <Button type="submit">Login</Button>
        </LoginForm>
      </LoginContainer>
      <ToastContainer />
    </LoginWrapper>
  );
};
const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  background: #d2d0d0;
  border-radius: 8px;
  margin-left: 20%;
  height: 50%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Label = styled.label`
  font-size: large;
  font-weight: bold;
  margin-bottom: 8px;
  width: 50%;
  margin-left: 5%;
  text-align: left;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: auto;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: auto;
  cursor: pointer;
  &:hover {
    background: #2980b9;
    color: #110202;
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: flex-start;
`;
const IMG = styled.img`
  margin-top: -30%;
`;
const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: auto;
  padding: 20px;
`;
