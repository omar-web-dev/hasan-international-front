import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main/Main";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Singin from "../Components/Singin/Singin";
import P404 from "../Pages/P404";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      // {
      //   path: "/about-us",
      //   element: <About/>,
      // },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/singin",
        element: <Singin/>,
      },
      
      {
        path: "*",
        element: <P404/>,
      },

    ],
  }
]);

export default routes;
