import { createContext, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Sample projects data
const projects = [
  {
    name: "Travell Web",
    github: "https://github.com/Rekcah-Chris/WorldWise.git",
    live: "https://yourportfolio.com",
    description:
      "A global travel app providing essential tools for travelers, such as trip planning and booking.",
    image: "../pr.jpg",
  },
  {
    name: "Parking Tracker",
    github: "https://github.com/Rekcah-Chris/KCNP-Parking-System.git",
    live: "https://climatetracker.com",
    description:
      "A tool for monitoring and managing parking spaces, including availability and booking.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pizza Website App",
    github: "https://github.com/Rekcah-Chris/Pizza.git",
    live: "https://plasticwasteapp.com",
    description:
      "A pizza ordering app with a real-time menu and order tracking features.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Parking Tracker",
    github: "https://github.com/Rekcah-Chris/KCNP-Parking-System.git",
    live: "https://climatetracker.com",
    description:
      "A tool for monitoring and managing parking spaces, including availability and booking.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pizza Website App",
    github: "https://github.com/Rekcah-Chris/Pizza.git",
    live: "https://plasticwasteapp.com",
    description:
      "A pizza ordering app with a real-time menu and order tracking features.",
    image: "https://via.placeholder.com/150",
  },
];

// Create Context
const ProjectsContext = createContext();

// Provider Component
export const ProjectsProvider = ({ children }) => {
  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Prop validation
ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

// Custom Hook to use the context
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
