import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/components/landingpage/LandingPage";
import IntroText from "./assets/components/home/IntroText.jsx";
import About from "./assets/components/about/About.jsx";

import Project from "./assets/components/project/Project";
import Contact from "./assets/components/contacts/Contact";
import Applayout from "./assets/ui/AppLayOut.jsx";
// import NavBar from "./assets/components/home/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/home" element={<IntroText />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
