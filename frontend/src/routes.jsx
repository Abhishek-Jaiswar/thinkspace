import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Error from "./Error";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogPost from "./pages/BlogPost";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";

export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'articles',
                element: <Articles />
            },
            {
                path: 'post/:id',
                element: <BlogPost />
            },
            {
                path: 'pricing',
                element: <Pricing />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
]