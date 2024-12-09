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
import Logo from "./Logo";

// Container for the Navbar
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  background-color: #f8fafc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  z-index: 1000;
`;

// Styling for the links container
const NavLinks = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 4rem;
  left: 0.1rem;
  right: 0.1rem;
  background-color: #1e293b;
  border: 1px solid #374151;
  padding: 1rem;
  border-radius: 8px;
  color: black;
  z-index: 1001;

  a {
    font-size: 0.9rem;
    text-align: center;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Times New Roman", serif;

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
    padding: 0rem;

    a {
      color: black;
    }
  }
`;

// Menu button for smaller screens
const NavMenuButton = styled.div`
  display: block;
  font-size: 2rem;
  cursor: pointer;
  color: black;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Styling for the icon next to the link text
const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;

  &:hover {
    color: #3b82f6;
  }
`;

// Overlay effect when the menu is open
const Overlay = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close on mobile
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      {/* Logo */}
      <>
        <Logo />
      </>

      {/* Menu button on mobile */}
      <NavMenuButton onClick={toggleMenu}>
        {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </NavMenuButton>

      <Overlay isMenuOpen={isMenuOpen} onClick={handleLinkClick} />

      {/* Navigation links */}
      <NavLinks isMenuOpen={isMenuOpen}>
        <Link to="/home" onClick={handleLinkClick}>
          <Icon>
            <HiOutlineHome /> Home
          </Icon>
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          <Icon>
            <HiOutlineUser /> About
          </Icon>
        </Link>
        <Link to="/projects" onClick={handleLinkClick}>
          <Icon>
            <HiOutlineLibrary /> Projects
          </Icon>
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          <Icon>
            <HiOutlinePhone /> Contact
          </Icon>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
