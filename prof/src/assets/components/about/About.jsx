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
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Papyrus", Fantasy;
  color: #0f172a;
  text-transform: capitalize;
  margin-top: 2rem;
  text-align: center;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  span {
    display: inline-block;
    color: #007bff;
    font-style: normal;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const Section = styled.div`
  padding: 1.2rem;
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
    font-family: "Times New Roman", serif;
    font-size: 1rem;
    line-height: 1.6;

    @media (min-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

const ResumeSection = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    display: inline-block;
    padding: 0.8rem 1.5rem;
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
      <Heading>
        <span>About</span> Me
      </Heading>
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
