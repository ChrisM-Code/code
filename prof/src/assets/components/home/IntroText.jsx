import styled from "styled-components";
import CTAButton from "./CTAButton";

const IntroContainer = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 5rem;
  padding: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    position: sticky;
    z-index: 100;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 2px auto 1px;
    position: relative;
  }
`;

const ProfileImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2rem;

  span {
    background: linear-gradient(to right, #22c55e, #3b82f6);
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #d1d5db;
  line-height: 1.2rem;
  color: #020617;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function IntroText() {
  return (
    <IntroContainer>
      <ProfileImage src="../pr.jpg" alt="Profile" />
      <Heading>
        I`m <span>Cape-Code</span>, Front-End Developer
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit
        ullam accusantium totam cumque distinctio temporibus ipsam facere aut
        ab. Accusantium perferendis atque quas cumque amet laboriosam a, ipsum
        minus impedit corporis eligendi natus ab nostrum iste voluptatum eum
        placeat, aut dicta delectus quasi beatae? Quae, mollitia? Modi, unde!
        Laudantium voluptatibus sequi quo dolorem eum iusto ipsa voluptatum
        consectetur! Enim doloribus cupiditate blanditiis, id commodi veniam
        libero pariatur quidem ipsa velit autem vel adipisci eos illum
        voluptatem, doloremque rem, nemo perspiciatis. Nam, minus earum
        cupiditate maxime itaque quia non autem quas totam iste temporibus
        eligendi voluptas omnis eaque exercitationem deleniti? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Maxime suscipit ullam accusantium
        totam cumque distinctio temporibus ipsam facere aut ab. Accusantium
        perferendis atque quas cumque amet laboriosam a, ipsum minus impedit
        corporis eligendi natus ab nostrum iste voluptatum eum placeat, aut
        dicta delectus quasi beatae? Quae, mollitia? Modi, unde! Laudantium
        voluptatibus sequi quo dolorem eum iusto ipsa voluptatum consectetur!
        Enim doloribus cupiditate blanditiis, id commodi veniam libero pariatur
        quidem ipsa velit autem vel adipisci eos illum voluptatem, doloremque
        rem, nemo perspiciatis. Nam, minus earum cupiditate maxime itaque quia
        non autem quas totam iste temporibus eligendi voluptas omnis eaque
        exercitationem deleniti? iste temporibus eligendi voluptas omnis eaque
        exercitationem deleniti?
      </Description>
      <CTAButton />
    </IntroContainer>
  );
}

export default IntroText;
