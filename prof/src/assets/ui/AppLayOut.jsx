import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import NavBar from "../components/home/NavBar.jsx";
import Footer from "./Footer.jsx";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
    font-family: "Arial", sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
  }
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1200px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;S
  padding: 10px 0;
  margin-top: 2rem;
`;

function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <NavBar />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
}

export default AppLayout;
