
import { createBrowserRouter } from "react-router-dom";

import Projects from "./Component/Projects";
import Home from "./Component/home";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Footer from "./Component/footer";
import Education from "./Component/Education";
import Experience from "./Component/Experience";



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