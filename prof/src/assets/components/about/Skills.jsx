import styled from "styled-components";

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #1e293b;
  padding: 0.5rem;
`;

const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2remrem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: semibold;
  color: #0f172a;
  margin-bottom: 1rem;
  text-align: left;
  text-color: slate-50;
  text-wrap: balance;
`;

function Skills() {
  return (
    <SkillContainer>
      <Heading>Skills</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga est
        accusantium velit, enim a, pariatur quibusdam cumque commodi neque minus
        optio facere assumenda reprehenderit eius. Sed harum quae incidunt
        repellendus.
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, alias!
      </Text>
    </SkillContainer>
  );
}

export default Skills;
