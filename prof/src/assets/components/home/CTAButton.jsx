import styled from "styled-components";

const GradientButton = styled.button`
  background: ${(props) =>
    props.variant === "contact"
      ? "linear-gradient(to right, #22c55e, #3b82f6)"
      : "linear-gradient(to right, #ef4444, #f59e0b)"};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  position: static;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

function CTAButton() {
  return (
    <ButtonsContainer>
      {/*  <GradientButton variant="resume">Resume</GradientButton>
        <GradientButton variant="contact">Contact</GradientButton> 
      <GradientButton variant="more">More...</GradientButton> */}
    </ButtonsContainer>
  );
}

export default CTAButton;
