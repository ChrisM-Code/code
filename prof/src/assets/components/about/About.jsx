import styled from "styled-components";
import Skills from "./Skills";
import Experience from "./Experience";
import DownloadResume from "./DownloadResume";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  padding: 2rem 1rem;
  background-color: #f9fafb;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 0 2rem;
  }
`;

const Section = styled.div`
  padding: 1.5rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  p {
    color: #1e293b;
    font-size: 1rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const ResumeSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
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
