import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/auth/action";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, isLoading } = useSelector((store) => {
    // console.log(store.authReducer);
    return store.authReducer;
  });

  const handleSignup = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    // console.log(userData);
    e.preventDefault();
    if (isLoading) {
      toast.info("Please wait...", { autoClose: false, closeOnClick: false });
    } else {
      toast.dismiss();
    }
    dispatch(register(userData)).then((res) => {
      navigate("/login");
    });
  };
  return (
    <SignupWrapper>
      <div>
        <h1>Welcome Back!</h1>
        <IMG src="login_page_img.png" alt="" />
      </div>
      <SignupContainer>
        <SignupForm onSubmit={handleSubmit}>
          <Group>
            <Label>Name</Label>
            <Input type="text" name="name" onChange={handleSignup} />
          </Group>
          <Group>
            <Label>Email</Label>
            <Input type="email" name="email" onChange={handleSignup} />
          </Group>
          <Group>
            <Label>Password</Label>
            <Input type="password" name="password" onChange={handleSignup} />
          </Group>
          <Group>
            <SELECT name="role" id="" onChange={handleSignup}>
              <OPTION value="">Select Role</OPTION>
              <OPTION value="creator">CREATOR</OPTION>
              <OPTION value="view_all">VIEW_ALL</OPTION>
            </SELECT>
          </Group>
          <Button type="submit">Register</Button>
        </SignupForm>
      </SignupContainer>
      <ToastContainer />
    </SignupWrapper>
  );
};
const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
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
    color: #d4bdbd;
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
const SELECT = styled.select`
  width: 90%;
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  font-size: medium;
  font-weight: bold;
`;
const OPTION = styled.option`
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  font-size: medium;
  font-weight: bold;
`;
