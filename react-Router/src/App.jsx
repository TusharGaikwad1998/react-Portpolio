import React, { useState } from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Github from "./components/github";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import Param from "./components/useParam";
import Child1 from "./components/child1";
import Child2 from "./components/Child2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "child1",
        element: (
          <div>
            <Child1 />
          </div>
        ),
      },
      {
        path: "child2",
        element: <Child2 />,
      },
    ],
  },
  {
    path: "/params/:id",
    element: (
      <div>
        <Navbar />
        <Param />
      </div>
    ),
  },
  {
    path: "/github",
    element: (
      <div>
        <Navbar />
        <Github />
      </div>
    ),
  },
  { path: "*", element: <NotFoundPage /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
