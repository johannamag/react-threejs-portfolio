import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border-radius: 5px;
  border: none;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border-radius: 5px;
  border: none;
`;
const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px;
`;
const Right = styled.div`
  flex: 1;
`;

export default function Contact() {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea rows={8} placeholder="Write your Message" />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
}
