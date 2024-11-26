import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
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
