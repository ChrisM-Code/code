import { Link } from "react-router-dom";
import styled from "styled-components";
import IntroText from "../home/IntroText";

const Homepage = styled.main`
  text-align: center;
  padding: 1rem;
  transition: filter 0.3s ease;
`;

function LandingPage() {
  return (
    <Homepage>
      <IntroText />
      <Link to="/home">More..</Link>
    </Homepage>
  );
}

export default LandingPage;
