import { useState } from "react";
import styled from "styled-components";
import NavBar from "../home/NavBar";
import IntroText from "../home/IntroText";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  padding: 2rem 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const HeroCont = styled.div`
  top: 0;
  left: 0;
  color: #020617;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    padding: 2rem 1rem;
  }

  @media (min-width: 1200px) {
    gap: 40px;
    padding: 4rem 3rem;
  }

  border-radius: 8px;
`;

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HomeContainer>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />{" "}
      <HeroCont>
        <IntroText isBlurred={isMenuOpen} />
      </HeroCont>
    </HomeContainer>
  );
}

export default Hero;
