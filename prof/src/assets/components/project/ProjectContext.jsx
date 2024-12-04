import { createContext, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const projects = [
  {
    name: "Travell ",
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

const ProjectsContext = createContext();

const StyledProviderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ProjectsProvider = ({ children }) => {
  return (
    <ProjectsContext.Provider value={projects}>
      <StyledProviderContainer>{children}</StyledProviderContainer>
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
