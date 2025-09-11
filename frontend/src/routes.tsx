import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Error from "./Error";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogPost from "./pages/BlogPost";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "post",
        element: <Posts />,
      },
      {
        path: "post/:id",
        element: <BlogPost />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];
