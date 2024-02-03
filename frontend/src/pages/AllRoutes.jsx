import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
