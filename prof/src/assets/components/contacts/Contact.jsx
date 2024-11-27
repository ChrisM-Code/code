import styled from "styled-components";
import ContactForm from "./ContactForm";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 6rem 3rem;
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

function Contact() {
  return (
    <ContactContainer>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </ContactContainer>
  );
}

export default Contact;
