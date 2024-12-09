import { ProjectsProvider } from "./ProjectContext";
import ProjectGrid from "./ProjectGrid";
import styled from "styled-component";

const Container = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f8fafc;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

function ProjectCard() {
  return (
    <ProjectsProvider>
      <Container>
        <ProjectGrid />
      </Container>
    </ProjectsProvider>
  );
}

export default ProjectCard;
