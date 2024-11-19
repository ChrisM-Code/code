import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: 1000;
  color: white;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
      background-color: #374151;
      transition: background-color 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    top: 4rem;
    right: 1rem;
    background-color: #1e293b;
    border: 1px solid #374151;
    padding: 1rem;
    border-radius: 8px;
    z-index: 1000;

    a {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

const NavMenuButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: white;
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavMenuButton onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </NavMenuButton>
      <NavLinks isMenuOpen={isMenuOpen}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contacts</Link>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
