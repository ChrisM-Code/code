import styled from "styled-components";
import ProjectGrid from "./ProjectGrid";
import { ProjectsProvider } from "./ProjectContext";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 1rem; /* Add spacing around the page */
  gap: 1rem; /* Space between heading and project container */

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding on smaller screens */
    gap: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #0f172a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

function Project() {
  return (
    <ProjectsProvider>
      <PageContainer>
        <Heading>My Projects</Heading>
        <ProjectGrid />
      </PageContainer>
    </ProjectsProvider>
  );
}

export default Project;
