
import { createBrowserRouter } from "react-router-dom";
import About from "./Componnent/About";
import Projects from "./Componnent/Projects";
import Home from "./Componnent/home";
import Skills from "./Componnent/Skills";
import Contact from "./Componnent/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/projects",
    element: <Projects></Projects>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/skills",
    element: <Skills></Skills>
  },
]);