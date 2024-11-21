import { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLibrary,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #e2e8f0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const NavLinks = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 4rem;
  right: 1rem;
  left: 1rem;
  color: black;

  background-color: #1e293b;
  border: 1px solid #374151;
  padding: 1rem;
  border-radius: 8px;
  z-index: 1001;

  a {
    font-size: 0.9rem;
    text-align: center;
    color: white;
    text-decoration: none;

    &:hover {
      color: #38bdf8;
      transition: color 0.3s ease;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    border: none;
    padding: 0;

    a {
      font-size: 1rem;
      color: white;

      &:hover {
        color: #fbbf24;
      }
    }
  }
`;

const NavMenuButton = styled.div`
  display: block;
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  color: #030712;
  margin-right: 1.5rem;

  &:hover {
    color: #3b82f6;
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavMenuButton onClick={toggleMenu}>
        {isMenuOpen ? (
          <Icon>
            <HiOutlineX />
          </Icon>
        ) : (
          <Icon>
            <HiOutlineMenu />
          </Icon>
        )}
      </NavMenuButton>
      <NavLinks isMenuOpen={isMenuOpen}>
        <Link to="/" onClick={handleLinkClick}>
          <Icon>
            <HiOutlineHome />
            {"Home "}
          </Icon>
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          <Icon>
            <HiOutlineUser />
            {"About "}
          </Icon>
        </Link>
        <Link to="/projects" onClick={handleLinkClick}>
          <Icon>
            <HiOutlineLibrary />
            {"Projects "}
          </Icon>
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          <Icon>
            <HiOutlinePhone /> {"Contacts "}
          </Icon>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
