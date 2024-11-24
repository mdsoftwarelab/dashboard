import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './utils/AuthProvider';
import PrivateRoutes from './utils/PrivateRoutes';
import Dashboard from './views/dashboard/dashboard';
import Login from './views/login/login';
import Posts from "./views/posts/posts";


function RoutingLayer() {

  return (
      <AuthProvider>
        {" "}
        <Routes>
          <Route element={<PrivateRoutes />}>
            {" "}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="posts" element={<Posts />} />
              <Route path="games" element={<h1>Games</h1>} />
              <Route path="users" element={<h1>Users</h1>} />
            </Route>
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </AuthProvider>
  )
}

export default RoutingLayer;
