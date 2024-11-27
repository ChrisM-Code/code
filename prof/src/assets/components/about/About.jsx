import styled from "styled-components";
import Skills from "./Skills";
import Experience from "./Experience";
import DownloadResume from "./DownloadResume";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #1e293b;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem; /* Slightly reduced padding for smaller screens */
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.6rem; /* Smaller initial font size for small screens */
  font-weight: bold;
  color: #0f172a;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Single-column layout for small screens */
  gap: 1.5rem; /* Reduced gap for smaller viewports */
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem; /* Larger gap for medium+ screens */
  }
`;

const Section = styled.div`
  padding: 1rem; /* Reduced padding for smaller screens */
  border-radius: 8px;
  background-color: #f9fafb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  p {
    color: #1e293b;
    font-size: 0.9rem;
    line-height: 1.5;

    @media (min-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const ResumeSection = styled.div`
  margin-top: 2rem; /* Reduced margin for better balance on small screens */
  text-align: center;

  a {
    display: inline-block;
    padding: 0.6rem 1.2rem; /* Reduced padding for smaller buttons */
    font-size: 0.9rem; /* Adjusted font size for small screens */
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

function About() {
  return (
    <AboutContainer>
      <Heading>About</Heading>
      <Container>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Experience />
        </Section>
      </Container>
      <ResumeSection>
        <DownloadResume />
      </ResumeSection>
    </AboutContainer>
  );
}

export default About;
