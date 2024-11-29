import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #555;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.hoverColor}; /* Use the hover color from props */
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialLink
        href="https://github.com/yourusername"
        target="_blank"
        aria-label="GitHub"
        hoverColor="#171515" /* GitHub's original color */
      >
        <FaGithub />
      </SocialLink>
      <SocialLink
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        aria-label="LinkedIn"
        hoverColor="#0077b5" /* LinkedIn's original color */
      >
        <FaLinkedin />
      </SocialLink>
      <SocialLink
        href="https://twitter.com/yourusername"
        target="_blank"
        aria-label="Twitter"
        hoverColor="#1DA1F2" /* Twitter's original color */
      >
        <FaTwitter />
      </SocialLink>
      <SocialLink
        href="https://instagram.com/yourusername"
        target="_blank"
        aria-label="Instagram"
        hoverColor="#DD2A7B" /* Instagram original color */
      >
        <FaInstagram />
      </SocialLink>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
