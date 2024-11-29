import styled from "styled-components";
import SocialLinks from "../components/contacts/SocialLinks";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 1000;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.8;

  a {
    color: #0077b5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font size on smaller screens */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © {new Date().getFullYear()}
          <a href="http://localhost:5173/">Lorem ipsum dolor sit.</a>. All
          Rights Reserved.
        </FooterText>
        <SocialLinks />
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
