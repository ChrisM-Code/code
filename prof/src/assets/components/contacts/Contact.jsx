import styled from "styled-components";
import ContactForm from "./ContactForm";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  padding: 2rem 1rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 6rem 3rem;
    justify-content: space-evenly;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
}

export default Contact;
