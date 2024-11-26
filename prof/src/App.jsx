import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/components/landingpage/LandingPage";
import About from "./assets/components/about/About";
import Hero from "./assets/components/home/Hero";
import Project from "./assets/components/project/Project";
import Contact from "./assets/components/contacts/Contact";
import Applayout from "./assets/ui/Applayout";
import NavBar from "./assets/components/home/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar /> {/* Navbar added here */}
        <Routes>
          {/* Wrap the routes that need the layout inside AppLayOut */}
          <Route path="/" element={<Applayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/home" element={<Hero />} />
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
