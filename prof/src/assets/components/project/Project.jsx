import styled from "styled-components";
import ProjectGrid from "./ProjectGrid";
import { ProjectsProvider } from "./ProjectContext";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
  gap: 0.9rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.2rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #0f172a;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
function Project() {
  return (
    <ProjectsProvider>
      <Heading>My Project</Heading>
      <PageContainer>
        <ProjectGrid />
      </PageContainer>
    </ProjectsProvider>
  );
}

export default Project;
