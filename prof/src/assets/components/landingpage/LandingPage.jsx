import { Link } from "react-router-dom";
import styled from "styled-components";
import IntroText from "../home/IntroText";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Arial", sans-serif;
  width: 100%;
  min-height: 100vh; /* Ensure content spans full viewport */
  box-sizing: border-box;
  padding: 0 1rem;

  a {
    display: inline-block;
    padding: 0.5rem 1.2rem; /* Adjust button size */
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #0ea5e9;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    min-width: 20px;
    margin: 0;
    text-align: center;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.05); /* Add hover effect for interactivity */
    }

    &:active {
      transform: scale(0.95); /* Click effect */
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1rem;

    a {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    a {
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }
  }
`;

function LandingPage() {
  return (
    <Homepage>
      <IntroText />
      <Link to="/about">Learn More</Link>
    </Homepage>
  );
}

export default LandingPage;
