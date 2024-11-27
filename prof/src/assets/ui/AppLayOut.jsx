import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden; /* Prevent scrolling on the main page */
    font-family: "Arial", sans-serif;
  }

  #root {
    height: 100%; /* Ensure the root element occupies full height */
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }

  main {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

function Applayout() {
  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <main>
          <Outlet />
        </main>
      </LayoutContainer>
    </>
  );
}

export default Applayout;
