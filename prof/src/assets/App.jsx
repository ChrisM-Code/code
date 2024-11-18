import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./components/home/Hero";
import AppLayOut from "./ui/AppLayOut";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
