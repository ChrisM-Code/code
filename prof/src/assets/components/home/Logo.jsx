import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled component for the logo
const StyledLogo = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white; /* White color for logo text */
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  text-align: left; /* Ensures logo is aligned left */

  &:hover {
    color: #3b82f6; /* Adjust hover color */
    transform: scale(1.1);
  }
`;

function Logo() {
  const handleLinkClick = () => {};

  return (
    <StyledLogo to="/" onClick={handleLinkClick}>
      Cape-Code
    </StyledLogo>
  );
}

export default Logo;
