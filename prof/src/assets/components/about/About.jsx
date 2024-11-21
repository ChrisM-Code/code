import styled from "styled-components";
import Skills from "./Skills";
import Experience from "./Experience";
import DownloadResume from "./DownloadResume";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  padding: 0rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const Section = styled.div`
  padding: 1rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  p {
    color: #1e293b; /* Darker text color */
    font-size: 1rem;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

function About() {
  return (
    <AboutContainer>
      <Heading>About</Heading>
      <Container>
        {/* skills section */}
        <Section>
          <Skills />
        </Section>
        {/* Experience section */}
        <Section>
          <Experience />
        </Section>
      </Container>
      <DownloadResume />
    </AboutContainer>
  );
}

export default About;
