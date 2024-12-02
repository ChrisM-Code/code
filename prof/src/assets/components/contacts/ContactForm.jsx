import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  line-height: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: "Papyrus", Fantasy;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem; /* Further adjust for very small screens */
    margin-bottom: 0.75rem;
  }
  span {
    display: inline-block;
    color: #007bff;
    font-style: normal;
  }
`;

const FormWrapper = styled.div`
  width: 100%;

  max-width: 600px; /* Updated max-width for better form layout */
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem; /* Ensure padding adapts for smaller screens */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const Label = styled.label`
  font-weight: bold;
  color: #555;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: -0.5rem 0 0.5rem; /* Adjust spacing for alignment */
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setErrorMessage("");
    }
  };

  const mutation = useMutation({
    mutationFn: (data) => {
      return fetch("https://your-api-endpoint.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send email");
        }
        return response.json();
      });
    },
    onSuccess: () => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      alert("Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>
          <span>Contact</span> Me
        </Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></Textarea>
          <Button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Sending..." : "Send"}
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;
