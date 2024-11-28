import { ProjectsProvider } from "./ProjectContext";
import ProjectGrid from "./ProjectGrid";
import styled from "styled-component";

const Container = styled.div`
  justify-content: flex-start;
  color: #1e293b;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 2rem 0;
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

function ProjectCard() {
  return (
    <ProjectsProvider>
      <>
        <Container>
          <ProjectGrid />
        </Container>
      </>
    </ProjectsProvider>
  );
}

export default ProjectCard;
