import styled from "styled-components";
import CTAButton from "./CTAButton";

const IntroContainer = styled.div`
  text-align: center;
  padding: 1rem;
  transition: filter 0.3s ease;

  ${({ isBlurred }) =>
    isBlurred &&
    `
    filter: blur(3px);
  `}

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

const ProfileImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  span {
    background: linear-gradient(to right, #22c55e, #3b82f6);
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size for small screens */
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #020617;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function IntroText({ isBlurred }) {
  return (
    <IntroContainer isBlurred={isBlurred}>
      <ProfileImage src="../pr.jpg" alt="Profile" />
      <Heading>
        I’m <span>Cape-Code</span>, Front-End Developer
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        consectetur! Nostrum eum dolore provident asperiores totam,
        reprehenderit repellat commodi sunt maxime illum placeat recusandae?
        Soluta dolorum dicta amet placeat, dolor eius mollitia laudantium
        voluptas tempora minima enim doloribus nobis recusandae sequi vero
        itaque ex repudiandae molestias beatae, nesciunt ducimus fugit?
      </Description>
      <CTAButton />
    </IntroContainer>
  );
}

export default IntroText;
