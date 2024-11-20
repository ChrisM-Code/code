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
      color: black;

      &:hover {
        color: #374151;
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

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <NavbarContainer>
      <NavMenuButton onClick={toggleMenu}>
        {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </NavMenuButton>
      <NavLinks isMenuOpen={isMenuOpen}>
        <Link to="/home">
          <HiOutlineHome />
          Home
        </Link>
        <Link to="/about">
          <HiOutlineUser /> About
        </Link>
        <Link to="/projects">
          <HiOutlineLibrary />
          Projects
        </Link>
        <Link to="/contact">
          <HiOutlinePhone /> Contacts
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
