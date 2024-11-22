import { Link } from "react-router-dom";
import styled from "styled-components";
import IntroText from "../home/IntroText";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  background-color: #f9fafb;
  font-family: "Arial", sans-serif;
  color: #333;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.6rem;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-top: 0rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }

    a {
      font-size: 0.9rem;
      padding: 0.6rem 1.2rem;
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
