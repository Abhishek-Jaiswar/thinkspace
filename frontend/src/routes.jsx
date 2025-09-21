import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Error from "./Error";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogPost from "./pages/BlogPost";
import Dashboard from "./admin/Dashboard";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import BlogEditor from "./pages/dashboard/BlogEditor";
import ManageArticles from "./pages/dashboard/ManageArticles";
import Overview from "./pages/dashboard/Overview";
import Analytics from "./pages/dashboard/Analytics";
import Earnings from "./pages/dashboard/Earnings";
import ProtectedRoute from "./components/ProtectedRoute";

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
                path: 'article/:id',
                element: <BlogPost />
            },
            {
                path: 'pricing',
                element: <Pricing />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ],
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: 'manage-articles',
                element: <ManageArticles />
            },
            {
                path: 'analytics',
                element: <Analytics />
            },
            {
                path: 'earnings',
                element: <Earnings />
            },
            {
                path: 'create',
                element: <BlogEditor />
            },
        ]
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