import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px 0;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #555;
  font-size: 28px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor};
    transform: scale(1.2); /* Subtle zoom effect */
  }

  @media (max-width: 480px) {
    font-size: 24px; /* Adjust size for smaller screens */
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialLink
        href="https://github.com/yourusername"
        target="_blank"
        aria-label="GitHub"
        hoverColor="#171515"
      >
        <FaGithub />
      </SocialLink>
      <SocialLink
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        aria-label="LinkedIn"
        hoverColor="#0077b5"
      >
        <FaLinkedin />
      </SocialLink>
      <SocialLink
        href="https://twitter.com/yourusername"
        target="_blank"
        aria-label="Twitter"
        hoverColor="#1DA1F2"
      >
        <FaTwitter />
      </SocialLink>
      <SocialLink
        href="https://instagram.com/yourusername"
        target="_blank"
        aria-label="Instagram"
        hoverColor="#DD2A7B"
      >
        <FaInstagram />
      </SocialLink>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
