import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./assets/components/home/Hero";
import AppLayOut from "./assets/ui/AppLayOut";

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
