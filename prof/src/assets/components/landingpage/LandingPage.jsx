import { Link } from "react-router-dom";
import styled from "styled-components";
import IntroText from "../home/IntroText";

const Homepage = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Arial", sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  a {
    display: inline-block;
    padding: 1rem;
    margin-top: 1rem;
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

  @media (max-width: 768px) {
    padding: 1rem;

    a {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.9rem;
      padding: 0.6rem;
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
