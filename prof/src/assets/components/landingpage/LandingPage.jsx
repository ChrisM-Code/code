import { Link } from "react-router-dom";
import styled from "styled-components";
import IntroText from "../home/IntroText";

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  font-family: "Arial", sans-serif;
  height: 100vh;

  a {
    display: inline-block;
    padding: 1rem 2rem;
    margin-top: 1rem;
    font-size: 1.1rem;
    color: white;
    background-color: #0ea5e9;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem; /* Reduced padding on small screens */

    a {
      font-size: 1rem; /* Make button text a bit smaller */
      padding: 0.8rem 1.6rem; /* Adjust button size */
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.9rem; /* Button text smaller */
      padding: 0.6rem 1.2rem; /* Further reduce button size */
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
