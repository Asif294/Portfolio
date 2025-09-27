
import { createBrowserRouter } from "react-router-dom";

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
    path: "/skills",
    element: <Skills></Skills>
  },
  {
    path: "/projects",
    element: <Projects></Projects>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
 
]);