import React from "react";

// import ProgressBar from "./components/ProgressBar";
import { createBrowserRouter, RouterProvider } from "react-router";
import Journey from "./UI/pages/Journey";
import Chestnut_case_study from "./UI/pages/Chestnut_case_study";
import Gilla_case_study from "./UI/pages/Gilla_case_study";
import GF_case_study from "./UI/pages/GF_case_study";
import Applayout from "./UI/pages/Applayout";
import Home from "./UI/pages/Home";
import About from "./UI/pages/About";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
      path: '/',
      element: <Applayout />,
      children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'journey',
        element: <Journey />
      },
      {
        path: 'about',
        element: <About />
      },
      ]
  },
  {
    path: 'chestnut-case-study',
    element: <Chestnut_case_study />
  },
  {
    path: 'gilla-case-study',
    element: <Gilla_case_study />
  },
  {
    path: 'gf-case-study',
    element: <GF_case_study />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};


export default App;
