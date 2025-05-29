import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Contact />
          <Footer />
        </div>
      ),
    },
    {
      path: "/footer",
      element: <Footer />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
