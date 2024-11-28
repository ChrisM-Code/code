import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useProjects } from "../project/ProjectContext"; // Import the context

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem; 
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box; 

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectContainer = styled.div`
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  animation: ${slideIn} 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 12rem;
  height: auto;
  border-radius: 8rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 6rem; // Adjust size for medium screens
  }

  @media (min-width: 1024px) {
    max-width: 12rem; // Adjust size for larger screens
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 5px;
  background-color: ${(props) => props.bgColor || "#0070f3"};
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

const ShowMoreButton = styled.button`
  display: flex;
  margin: 2rem auto 0;
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  overflow-y: auto;

  &:hover {
    background-color: #005bb5;
  }
`;

const ProjectGrid = () => {
  const projects = useProjects(); // Fetch projects data from context
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Control how many projects are shown

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more projects
  };

  return (
    <>
      <GridContainer>
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectContainer
            key={index}
            style={{
              animationDelay: `${index * 0.3}s`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <ProjectImage src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div>
              <LinkButton
                href={project.github}
                target="_blank"
                bgColor="#24292e"
              >
                View GitHub
              </LinkButton>
              <LinkButton href={project.live} target="_blank" bgColor="#28a745">
                Live Demo
              </LinkButton>
            </div>
          </ProjectContainer>
        ))}
      </GridContainer>
      {visibleCount < projects.length && (
        <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
      )}
    </>
  );
};

export default ProjectGrid;
