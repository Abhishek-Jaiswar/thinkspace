import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Error from "./Error";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Pricing from "./pages/Pricing";

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
                path: 'post',
                element: <Posts />
            },
            {
                path: 'pricing',
                element: <Pricing />
            },
        ]
    }
]