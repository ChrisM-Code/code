import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Arial", sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }

  main {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Applayout() {
  return (
    <LayoutContainer>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}

export default Applayout;
