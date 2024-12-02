import styled from "styled-components";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Times New Roman", serif;

  @media (min-width: 1200px) {
    flex-direction: row; /* Align form and social links side by side */
    gap: 2rem; /* Add space between form and social links */
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px; /* Limit the maximum width for the form */
  padding: 1rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Wrap links if needed on smaller screens */
  margin-top: 2rem;

  @media (min-width: 1200px) {
    margin-top: 0; /* No margin needed when side by side */
    flex-direction: column; /* Arrange links vertically on large screens */
    align-items: flex-start; /* Align links to the left */
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    gap: 1.5rem; /* Add more spacing on medium and larger screens */
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <SocialLinksWrapper>
        <SocialLinksContainer>
          <SocialLinks />
        </SocialLinksContainer>
      </SocialLinksWrapper>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </ContactContainer>
  );
}

export default Contact;
