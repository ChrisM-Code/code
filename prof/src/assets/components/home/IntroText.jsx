import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: ce m nter;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  transition: filter 0.3s ease;

  ${({ isBlurred }) =>
    isBlurred &&
    `
    filter: blur(3px);
  `}

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 12rem;
  height: 12rem;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 1rem;

  span {
    background: linear-gradient(to right, #22c55e, #3b82f6, #fbbf24);
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SkillText = styled(motion.span)`
  display: inline-block;
  background: #451a03;
  transition: color 0.3s ease-in-out;
`;

const SkillTextWrapper = styled.p`
  font-size: 1.2rem;
  font-weight: medium;
  color: #451a03;
  text-align: center;
  margin: 0; /* Ensure no extra spacing */

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #020617;
  margin: 0.5rem;
  padding: 0 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

const skills = ["Developer", "Support", "Tech"];

function IntroText({ isBlurred }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isBlurred]);

  return (
    <IntroContainer isBlurred={isBlurred}>
      <ProfileImage src="../pr.jpg" alt="Profile" />{" "}
      <Heading>
        I’m <span>Cape-Code</span>,
        <SkillTextWrapper>
          <AnimatePresence mode="wait">
            <SkillText
              key={skills[currentSkillIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {skills[currentSkillIndex]}
            </SkillText>
          </AnimatePresence>
        </SkillTextWrapper>
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        consectetur! Nostrum eum dolore provident asperiores totam,
        reprehenderit repellat commodi sunt maxime illum placeat recusandae?
        Soluta dolorum dicta amet placeat, dolor eius mollitia laudantium
        voluptas tempora minima enim doloribus nobis recusandae sequi vero
        itaque ex repudiandae molestias beatae, nesciunt ducimus fugit?
      </Description>
    </IntroContainer>
  );
}

export default IntroText;
