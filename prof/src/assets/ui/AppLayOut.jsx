import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/home/NavBar";
import Hero from "../components/home/Hero";

const LayoutContainer = styled.div`
  top: 0rem;
  left: 0rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Arial", sans-serif;
  padding: 0;
`;

function AppLayOut() {
  return (
    <LayoutContainer>
      <NavBar />
      <Hero />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}

export default AppLayOut;
