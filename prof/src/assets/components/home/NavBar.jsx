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

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #1e293b;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  z-index: 1000;
`;

const NavLinks = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 4rem;
  left: 1rem;
  right: 1rem;
  background-color: #1e293b;
  border: 1px solid #374151;
  padding: 1rem;
  border-radius: 8px;
  z-index: 1001;

  a {
    font-size: 1rem;
    text-align: center;
    color: black;
    text-decoration: none;

    &:hover {
      color: #38bdf8;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    border: none;
    padding: 0;
    gap: 2rem; /* Added spacing between the links */
  }
`;

const NavMenuButton = styled.div`
  display: block;
  font-size: 2rem;
  cursor: pointer;
  color: black;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: white;

  &:hover {
    color: #3b82f6;
  }
`;

const LogoCont = styled.div`
  gap: 0.5rem;
  font-size: 1.2rem;
  color: white;

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
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <NavbarContainer>
      <LogoCont>
        <Logo />
      </LogoCont>
      <NavMenuButton onClick={toggleMenu}>
        {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </NavMenuButton>
      <NavLinks>
        <Link to="/home" onClick={() => handleLinkClick("Home")}>
          <Icon>
            <HiOutlineHome /> Home
          </Icon>
        </Link>
        <Link to="/about" onClick={() => handleLinkClick("About")}>
          <Icon>
            <HiOutlineUser /> About
          </Icon>
        </Link>
        <Link to="/projects" onClick={() => handleLinkClick("Projects")}>
          <Icon>
            <HiOutlineLibrary /> Projects
          </Icon>
        </Link>
        <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
          <Icon>
            <HiOutlinePhone /> Contact
          </Icon>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
