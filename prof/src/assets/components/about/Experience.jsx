import styled from "styled-components";

const ExpContainer = styled.div`
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
    font-size: 2rem;
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

function Experience() {
  return (
    <ExpContainer>
      <Heading>Experience</Heading>
      <Text>Lorem20</Text>

      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos maxime
        fuga ex repellat? E
      </Text>
    </ExpContainer>
  );
}

export default Experience;
