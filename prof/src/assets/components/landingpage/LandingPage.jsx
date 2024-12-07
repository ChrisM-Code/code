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
  height: 100vh;
  box-sizing: border-box;
  padding: 0 1rem; /* Add padding for spacing */

  a {
    display: inline-block;
    padding: 0.5rem;
    font-size: 1.1rem;
    color: white;
    background-color: #0ea5e9;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    min-width: 100px;

    &:hover {
      background-color: #0056b3;
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1rem;

    a {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    a {
      font-size: 0.9rem;
      padding: 0.6rem;
    }
  }
`;

function LandingPage() {
  return (
    <>
      <Homepage>
        <IntroText />
        <Link to="/about">Learn More</Link>
      </Homepage>
    </>
  );
}

export default LandingPage;
