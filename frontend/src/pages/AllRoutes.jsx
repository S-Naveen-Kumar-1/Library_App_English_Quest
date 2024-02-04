import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { Books } from "./Books";
import { PrivateRoute } from "../components/PrivateRoute";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
