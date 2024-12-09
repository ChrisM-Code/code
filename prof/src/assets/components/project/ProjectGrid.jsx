import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useProjects } from "../project/ProjectContext";

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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  padding: 1.2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: auto;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 1rem;
    grid-template-columns: 1fr; /* Single column on very small screens */
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.2rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  animation: ${slideIn} 0.8s ease-out forwards;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

// const ProjectImage = styled.img`
//   width: 100%;
//   max-width: 180px;
//   height: auto;
//   aspect-ratio: 1 / 1;
//   object-fit: cover;
//   border-radius: 10px;
//   margin-bottom: 1rem;
//   background-color: #f3f4f6;

//   @media (max-width: 480px) {
//     max-width: 120px;
//     aspect-ratio: 1 / 1;
//   }
// `;

const LinkButton = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  margin: 0.5rem;
  background-color: ${(props) => props.bgColor || "#0070f3"};
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }
`;

const ShowMoreButton = styled.button`
  margin: 2rem auto 0;
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  color: #1e293b;
  margin: 0.5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TextP = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0.5rem 0 1rem;
  text-align: center;
  line-height: 1.4rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
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
            {/* <ProjectImage src={project.image} alt={project.name} /> */}
            <Heading2>{project.name}</Heading2>
            <TextP>{project.description}</TextP>
            <ButtonCont>
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
            </ButtonCont>
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
