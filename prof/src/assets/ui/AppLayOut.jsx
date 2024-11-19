import styled from "styled-components";
import Hero from "../components/home/Hero";

const LayoutContainer = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Arial", sans-serif;
  padding: 0;
`;

function AppLayOut() {
  return (
    <LayoutContainer>
      <Hero />
    </LayoutContainer>
  );
}

export default AppLayOut;
