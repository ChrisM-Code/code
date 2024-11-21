import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Arial", sans-serif;
  background-color: #f9fafb;
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
