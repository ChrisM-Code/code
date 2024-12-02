import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled component for the logo
const StyledLogo = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white; /* White color for logo text */
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  text-align: left;

  &:hover {
    color: #3b82f6; /* Adjust hover color */
    transform: scale(1.1);
  }
`;

// Styling for the logo container
const LogoCont = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  flex-grow: 1;
  font-size: 1.5rem;
  color: black;
  font-family: "Lucida Handwriting", Cursive;

  span {
    display: inline-block;
    color: #7c2d12;
    font-style: normal;
  }
`;

function Logo() {
  const handleLinkClick = () => {};

  return (
    <StyledLogo to="/" onClick={handleLinkClick}>
      <LogoCont>
        <span>Code</span>{" "}
      </LogoCont>
    </StyledLogo>
  );
}

export default Logo;
