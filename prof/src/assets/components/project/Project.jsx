import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  padding: 1rem;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

function Project() {
  return (
    <ProjectContainer>
      <ProjectCard />
    </ProjectContainer>
  );
}

export default Project;
