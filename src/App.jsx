
import { createBrowserRouter } from "react-router-dom";

import Projects from "./Componnent/Projects";
import Home from "./Componnent/home";
import Skills from "./Componnent/Skills";
import Contact from "./Componnent/Contact";
import Footer from "./Componnent/footer";
import Education from "./Componnent/Education";
import Experience from "./Componnent/Experience";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
   {
    path: "/skills",
    element: <Skills></Skills>
  },
  //  {
  //   path: "/experince",
  //   element: <Experience></Experience>
  // },
  {
    path: "/projects",
    element: <Projects></Projects>
  },
  {
    path: "/education",
    element: <Education></Education>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path:"/footer",
    element:<Footer></Footer>
  }
 
]);