import { useState } from "react";
import styled from "styled-components";
import NavBar from "../home/NavBar";
import IntroText from "../home/IntroText";

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
  margin-top: 5rem; /* Adjusted to account for fixed navbar height */

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
    <>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />{" "}
      <HeroCont>
        <IntroText isBlurred={isMenuOpen} />{" "}
      </HeroCont>
    </>
  );
}

export default Hero;
