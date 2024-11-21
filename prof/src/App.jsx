import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./assets/components/home/Hero";
import About from "./assets/components/about/About";
import Project from "./assets/components/project/Project";
import AppLayOut from "./assets/ui/AppLayOut";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
      },
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
